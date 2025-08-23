import type { Schema, Struct } from '@strapi/strapi';

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String;
  };
}

export interface CommonImageWithAlt extends Struct.ComponentSchema {
  collectionName: 'components_common_image_with_alts';
  info: {
    displayName: 'Image With Alt';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.Enumeration<
      ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow']
    > &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface LogoLogo extends Struct.ComponentSchema {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logo_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    action: Schema.Attribute.Component<'common.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.faq_item', true>;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.feature_item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heros';
  info: {
    description: 'Hero section with title, description and image';
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Component<'common.image-with-alt', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    authorTitle: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links_s';
  info: {
    displayName: 'Links ';
  };
  attributes: {
    ButtonType: Schema.Attribute.Enumeration<['link', 'Primary', 'Secondary']>;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'shared.sublink', true>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedSublink extends Struct.ComponentSchema {
  collectionName: 'components_shared_sublinks';
  info: {
    displayName: 'Sublink';
  };
  attributes: {
    ButtonType: Schema.Attribute.Enumeration<
      ['Link ', 'Primary ', 'Secondary']
    >;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'common.image-with-alt': CommonImageWithAlt;
      'common.seo': CommonSeo;
      'logo.logo': LogoLogo;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.faq_item': SectionsFaqItem;
      'sections.feature_item': SectionsFeatureItem;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.rich_text': SectionsRichText;
      'sections.testimonial': SectionsTestimonial;
      'shared.links': SharedLinks;
      'shared.sublink': SharedSublink;
    }
  }
}
