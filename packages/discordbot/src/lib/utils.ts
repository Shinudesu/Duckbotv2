import { ColorResolvable, EmbedFieldData, MessageEmbed } from 'discord.js';

export function dateToString(date: Date): string {
  return date.toISOString().split('T')[0];
}

export interface EmbedBuilderUtilOptions {
  title: string;
  color?: ColorResolvable;
  author?: string;
  icon?: string;
  thumbnail?: string;
  image?: string;
  description?: string;
  fields?: EmbedFieldData[];
  footer?: string;
  footerIcon?: string;
  timestamp?: boolean;
  url?: string;
}

export const EmbedBuilderUtil = (options: EmbedBuilderUtilOptions) => {
  const messageEmbed = new MessageEmbed();

  messageEmbed
    .setColor(options.color || 'GREY')
    .setTitle(options.title || '')
    .setAuthor(options.author || '', options.icon || '', options.url || '')
    .setThumbnail(options.thumbnail || '')
    .setDescription(options.description || '')
    .setImage(options.image || '')
    .setFooter(options.footer || '', options.footerIcon || '')
    .setURL(options.url || '');

  if (options.author) {
    messageEmbed.setAuthor({ name: options.author });
  }

  if (options.timestamp) messageEmbed.setTimestamp();
  if (options.fields) messageEmbed.addFields(options.fields);

  return messageEmbed;
};
