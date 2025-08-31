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

export interface FooterLinkFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_footer_links';
  info: {
    displayName: 'FooterLink';
  };
  attributes: {
    IsExternal: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface LogoLogo extends Struct.ComponentSchema {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    href: Schema.Attribute.String;
    logo_img: Schema.Attribute.Media<'images' | 'files'>;
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

export interface SectionsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_members';
  info: {
    displayName: 'TeamMember';
  };
  attributes: {
    MemberName: Schema.Attribute.String;
    MemberPhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Role: Schema.Attribute.String;
    Socials: Schema.Attribute.Component<'social-media-link.socials', true>;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
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
    IsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    SubLinks: Schema.Attribute.Component<'shared.sublink', true>;
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

export interface SocialMediaLinkSocials extends Struct.ComponentSchema {
  collectionName: 'components_social_media_link_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    IsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    SocialLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SocialUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.button': CommonButton;
      'common.image-with-alt': CommonImageWithAlt;
      'common.seo': CommonSeo;
      'footer-link.footer-link': FooterLinkFooterLink;
      'logo.logo': LogoLogo;
      'sections.cta': SectionsCta;
      'sections.feature_item': SectionsFeatureItem;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.team-member': SectionsTeamMember;
      'sections.testimonial': SectionsTestimonial;
      'shared.links': SharedLinks;
      'shared.sublink': SharedSublink;
      'social-media-link.socials': SocialMediaLinkSocials;
    }
  }
}
