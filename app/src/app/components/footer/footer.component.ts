import { Component } from '@angular/core';

interface SocialMediaIcon {
  name: string;
  iconName: string;
  link: string;
}

interface ContactIcon {
  description: string;
  iconName: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  // Social media
  socialMediaIcons: SocialMediaIcon[] = [
    { 
      name: 'Facebook', 
      iconName: "facebook.png",
      link: "https://facebook.com"
    },
    { 
      name: 'Instagram', 
      iconName: "instagram.png",
      link: "https://instagram.com"
    },
    { 
      name: 'Twitter', 
      iconName: "twitter.png",
      link: "https://twitter.com"
    },
    { 
      name: 'YouTube', 
      iconName: "youtube.png",
      link: "https://youtube.com"
    }
  ];

  // Contacts
  contactsIcons: ContactIcon[] = [
    {
      description: "Jalisco, GDL 10012, MEX",
      iconName: "location.png"
    },
    {
      description: "musicos@musica.com",
      iconName: "mail.png"
    },
    {
      description: "+ 52 33 28 12 48 59",
      iconName: "phone.png"
    },
    {
      description: "+ 01 234 567 89",
      iconName: "phone.png"
    }
  ];
}
