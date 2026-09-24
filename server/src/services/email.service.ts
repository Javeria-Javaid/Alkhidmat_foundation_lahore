// ==============================================================================
// ALKHIDMAT FOUNDATION LAHORE - EMAIL & DISPATCH SERVICE
// ==============================================================================

import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import type { CreateInquiryInput } from '../validators/inquiry.validator.js';

class EmailService {
  private transporter: Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter(): void {
    if (env.DISPATCH_MODE === 'smtp' && env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) {
      try {
        this.transporter = nodemailer.createTransport({
          host: env.SMTP_HOST,
          port: env.SMTP_PORT || 587,
          secure: env.SMTP_PORT === 465,
          auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
          },
        });
        logger.info('SMTP Transporter initialized successfully');
      } catch (err) {
        logger.error('Failed to initialize SMTP transporter', err);
        this.transporter = null;
      }
    } else {
      logger.info(`Email dispatcher operating in '${env.DISPATCH_MODE}' mode`);
    }
  }

  public async sendContactInquiry(inquiry: CreateInquiryInput, clientIp?: string): Promise<{ success: boolean; mode: string }> {
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
    const fromAddress = env.SMTP_FROM || env.SMTP_USER || 'no-reply@alkhidmat.com.pk';
    const recipient = env.NOTIFICATION_EMAIL_CONTACT;

    const emailSubject = `[Alkhidmat Lahore Inquiry] ${inquiry.subject}`;
    const emailBodyText = `
======================================================
NEW CONTACT INQUIRY RECEIVED - ALKHIDMAT LAHORE
======================================================
Name:         ${inquiry.name}
Email:        ${inquiry.email}
Phone:        ${inquiry.phone || 'Not provided'}
Organization: ${inquiry.company || 'Not provided'}
Subject:      ${inquiry.subject}
Date/Time:    ${timestamp} (PKT)
Client IP:    ${clientIp || 'Unknown'}

Message:
------------------------------------------------------
${inquiry.message}
======================================================
    `.trim();

    const emailBodyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1b75bc; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">Alkhidmat Foundation Lahore</h2>
          <p style="margin: 5px 0 0; font-size: 13px; opacity: 0.9;">New Public Website Inquiry</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #64748b;">Sender Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${inquiry.email}" style="color: #1b75bc;">${inquiry.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiry.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Organization:</td>
              <td style="padding: 8px 0; color: #0f172a;">${inquiry.company || 'Individual / Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${inquiry.subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Submitted At:</td>
              <td style="padding: 8px 0; color: #64748b;">${timestamp} (PKT)</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #1b75bc; padding: 16px; border-radius: 4px; margin-top: 10px;">
            <p style="margin: 0 0 6px; font-weight: bold; color: #475569; font-size: 13px;">MESSAGE CONTENT:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #1e293b; font-size: 14px;">${inquiry.message}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 24px; text-align: center; font-size: 12px; color: #64748b;">
          This message was submitted through the official public contact form at Alkhidmat Lahore.
        </div>
      </div>
    `.trim();

    if (this.transporter && env.DISPATCH_MODE === 'smtp') {
      try {
        await this.transporter.sendMail({
          from: `"Alkhidmat Lahore Portal" <${fromAddress}>`,
          to: recipient,
          replyTo: inquiry.email,
          subject: emailSubject,
          text: emailBodyText,
          html: emailBodyHtml,
        });
        logger.info(`Inquiry email dispatched via SMTP to ${recipient}`, { subject: inquiry.subject, from: inquiry.email });
        return { success: true, mode: 'smtp' };
      } catch (error) {
        logger.error('Failed to dispatch email via SMTP, falling back to log', error);
        // Fallback to console output so message is never lost
        console.log(emailBodyText);
        return { success: true, mode: 'fallback-console' };
      }
    } else {
      // Console mode
      console.log('\n' + emailBodyText + '\n');
      logger.info(`Inquiry logged to console (DISPATCH_MODE=${env.DISPATCH_MODE}) from ${inquiry.email}`);
      return { success: true, mode: 'console' };
    }
  }
}

export const emailService = new EmailService();
