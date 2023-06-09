import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.scss']
})
export class MeetOurTeamComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  names = [
    {name : "Antonio Romo", 
    charge: "Front-Dev", 
    cardText: "Antonio is a skilled Front-End Developer with a passion for creating visually appealing and user-friendly websites.", 
    url: "assets/imgs/team/tony.jpg"},

    {name : "Armando Escareño", 
    charge: "Front-Dev", 
    cardText: "Armando is a skilled Front-End Developer with a passion for building efficient and reliable systems.", 
    url: "assets/imgs/team/escareño.png"},

    {name : "Luis Navarrete", 
    charge: "Back-Dev",
    cardText: "Luis is a skilled Back-End Developer with a passion for building robust and scalable applications.", 
    url: "assets/imgs/team/luis.jpg"},
  ]
}
