import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: Http) {}
  title = 'app works!';
  msMenu = [
	{
		MenuName:' Homepage', 
		MenuIcon: 'fa fa-home'
	},
	{
		MenuName:' Personal Info', 
		MenuIcon: 'fa fa-user-secret'
	},
	{
		MenuName:' Expertise Areas',
		MenuIcon: 'fa fa-binoculars'
	}, 
	{
		MenuName:' Services',
		MenuIcon: 'fa fa-cogs'
	}, 
	{	
		MenuName:' Testimonials',
		MenuIcon: 'fa fa-quote-left'
	},
	{	
		MenuName:' Contact Me',
		MenuIcon: 'fa fa-envelope'
	}];
  activeMenu = 'Homepage';
  msCarousel = [0,1,2,3];
  objCarousel = [
	{
		ind: 1,
		source: "assets/images/01.jpg",
		alternate: "First Slide",
		heading: "Visual Studio",
		desc: "Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs for Microsoft Windows, as well as web sites, web applications and web services."
	},
	{
		ind: 2,
		source: "assets/images/02.jpg",
		alternate: "Second Slide",
		heading: "HTML5, CSS3",
		desc: "HTML5 is not one large entity, but rather made up of smaller parts that work together to create something innovative and advanced. CSS3 is a large single specification defining various features, CSS 3 is divided into modules. Each module adds new capabilities."
	},
	{
		ind: 3,
		source: "assets/images/03.jpg",
		alternate: "Third Slide",
		heading: "LAMP (MySQL*, PHP*)",
		desc: "LAMP is suitable for building dynamic web sites and web applications. Archetypal LAMP, variations and retronyms appeared for other combinations of operating system, web server, database, and software language."
	},
	{
		ind: 4,
		source: "assets/images/04.jpg",
		alternate: "Fourth Slide",
		heading: "AJAX, JQuery, JavaScript",
		desc: "AJAX is a Web development techniques used to create asynchronous Web apps. jQuery is the most popular library in use today. jQuery's is used to create animations, handle events. JavaScript aka JS is most commonly used for client-side behaviour to HTML pages."
	}];
	
  objTop3 = [
	{
		ind:1,
		source: "assets/images/mean.png",
		alternate: "Mean Stack",
		heading:"MEAN (MongoDB, Express, Angular, Node)",
		desc:"The MEAN stack is MongoDB, Express.js, Angular and Node.js. JavaScript software stack for building dynamic web sites and web applications. The Friendly & Fun Javascript Fullstack for your next web application. All components of the MEAN stack support programs written in JavaScript",
		btnLable:"View details"
	},
	{
		ind:2,
		source: "assets/images/lamp.png",
		alternate: "LAMP Stack",
		heading:"LAMP (Linux, Apache, MySQL, PHP)",
		desc:"LAMP stack is a popular open source web platform commonly used to run dynamic web sites and servers. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.",
		btnLable:"View details"
	},
	{
		ind:3,
		source: "assets/images/WPF.png",
		alternate: "Windows Presentation Foundation",
		heading:"Windows Presentation Foundation",
		desc:"WPF, which stands for Windows Presentation Foundation, allows us to create an application with a wide range of GUI elements. It attempts to provide a consistent programming model for building applications and separates the user interface from business logic.",
		btnLable:"View details"
	}];
  objMyPassion = [
	{
		ind:1,
		source: "assets/images/pic11.jpg",
		alternate: "UI/UX Designing",
		title:"UI/UX Designing",
		text:"An excellent user experience (UI/UX) means your digital product is easy to use. I will design your app with you and your users special needs in the front seat. I ensures a truly user-friendly yet simple to maintain design. It can also help shape the brand in the very early stages by defining how the product communicates with it's users",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	},
	{
		ind:2,
		source: "assets/images/pic31.jpg",
		alternate: "Social Media",
		title:"Socially Active",
		text:"I will create your social existence by making social pages to most happening social websites such as Twitter, Facebook, Google+, Myspace etc... Social networking has been around forever. It's the simple act of expanding the number of people you know by meeting your friends' friends, their friends' friends and so on. In fact, many of us today use Twitter and Facebook to promote our businesses.",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	},
	{
		ind:3,
		source: "assets/images/pic21.jpg",
		alternate: "Logo Designing",
		title:"Identity Design - Logo",
		text:"The logo (ideogram), is the image embodying an organization. Logos are a critical aspect of business marketing. It is company's major graphical representation, a logo anchors a company's brand and becomes the single most visible manifestation of the company within the market. I will design your Logo to represent you better to your clients. ",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	},
	{
		ind:4,
		source: "assets/images/pic41.jpg",
		alternate: "eCommerce",
		title:"eCommerce",
		text:"Electronic commerce, commonly written as e-commerce is a term for any type of business, or commercial transaction, that involves the transfer of information across the Internet. It is currently one of the most important aspects of the Internet to emerge. So you want to sell things on the internet? I have right solutions. Including custom shopping carts that are molded exactly the way you want.",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	},
	{
		ind:5,
		source: "assets/images/pic51.jpg",
		alternate: "Database Solutions",
		title:"Database Solutions.",
		text:"We can design new or integrate already existing databases, solution or database solution into your website or software. And thereby making it easy for your employees and clients to always have the freshest news and content. We can make a custom database turns mountains of paper and spreadsheets into easy-to-use informations.",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	},
	{
		ind:6,
		source: "assets/images/pic61.jpg",
		alternate: "Website Promotion",
		title:"Promote you!!",
		text:"I am specialized in getting websites ranked high in the search engine results. I do the search engine optimizations aka SEO so that you can reach exactly the clients that you are looking to increase exposure of a website to bring more visitors. By connecting different exposure channels some of the high quality and unique content can become viral driving a lot of usually targeted traffic to website.",
		btnText: "Read More",
		tags:['User Experience', 'User Interface', 'User Friendly', 'Designing']
	}];
	public mySO = [];
	mySO1 = this.http.get('https://api.stackexchange.com/2.2/users/3796048/tags/c%23%20php/top-answers?pagesize=20&order=desc&sort=activity&site=stackoverflow&key=8mt9qlAuTSwQ3aql7APN3Q((&filter=!-*f(6t0WW)1e').map((response)=> response.json()).subscribe(res => this.mySO = res);
	
	public myInfoSO = [];
	myinfourl="https://api.stackexchange.com/2.2/users/3796048?order=desc&sort=reputation&site=stackoverflow&key=8mt9qlAuTSwQ3aql7APN3Q((";
	mySO2 = this.http.get(this.myinfourl).map((response)=> response.json()).subscribe(res => this.myInfoSO = res);
	
  objMyProjects = [
	{
		ind:1,
		icon: "fa fa-magic fa-3x",
		title:"IoT Middleware",
		text:"<ul><li>The IoT-Middleware is a platform enabling communication and messaging between equipment, devices, services and systems, thus, enabling machine-to-machine (M2M) interoperability. </li><li>Offers highly flexible and configurable system interfaces and object / smart-object connectors for use in any business system or environment </li></ul>",
		techUsed:['Visual Studio 2013', 'XAML', 'WPF', 'C#', '.NET v4.5.1', 'XML', 'SQL-Server 2008', 'MVVM']
	},
	{
		ind:2,
		icon: "fa fa-tachometer fa-3x",
		title:"ImGuni",
		text:"<ul><li>Implemented Money-Bookers, Alert-Pay, Pay-Pal, CITI Bank for different modes of payments online.</li><li>Witty CRM App to manage the staff attendance, salary and incentives for their performance.</li><li>CRM App is integrated with SalesForce CRM using SOAP API</li><li>Cross browser compatibility across browsers and operating systems.</li></ul>",
		btnText: "Read More",
		techUsed:['HTML5', 'MVC', 'PHP5', 'CSS3', 'MySQL', 'AJAX', 'JSON', 'JQuery', 'bootstrap', 'AngularJS']
	},
	{
		ind:3,
		icon: "fa fa-desktop fa-3x",
		title:"HelpPCOnline",
		text:"<ul><li>Developed server side scripting using PHP for www.helppconline.com.</li><li>Successfully mentored a team of four people.</li><li>Integrated Payment Gateways for collection of payment from the customer online.</li></ul>",
		techUsed:['HTML', 'MVC', 'PHP', 'CSS', 'MySQL', 'AJAX', 'JSON', 'JQuery']
	},
	{
		ind:4,
		icon: "fa fa-bus fa-3x",
		title:"RTO Automation",
		text:"<ul><li>Developed RTO [Regional Transport Office] Automation System. It provides a quick and reliable approach towards the pupils who have applied for the licenses that maximizes the efficient use of the resources. It also does have analytical capabilities.</li></ul>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'SQL Server', 'Classic VB']
	},
	{
		ind:5,
		icon: "fa fa-american-sign-language-interpreting fa-3x",
		title:"SADA Automation",
		text:"<ul><li>SADA(Special Area Development Authority) Automation is a Govt. body which is responsible for the development of an area called magnet city. We had given them the solution to do it paperless.</li></ul>",
		techUsed:['Visual Basic 6.0', 'MS-Access', 'ArcGIS', 'MapInfo', 'Map-Object 2.0', 'DDE', 'ArcView']
	},
	{
		ind:6,
		icon: "fa fa-certificate fa-3x",
		title:"BnD Automation",
		text:"<ul><li>Spearheaded efforts for Birth ’n’ Death Automation System for Municipal Corporation Bhilwara, providing analytical and statistical capabilities to most of the queries related to Birth and Death Registration.</li><li>Implemented a secure admin part for different analytical reports for official purposes.</li><li>Demonstrated reliability with the team onshore and client representatives</li></ul>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'SQL Server', 'Classic VB']
	},
	{
		ind:7,
		icon: "fa fa-compass fa-3x",
		title:"GIS Kiosk",
		text:"<ul><li>Implemented the Kiosk for Karnataka Land Records for the record and map printing in their native language [Kannada].</li></ul>",
		techUsed:['Visual Basic 6.0', 'MS-Access', 'ArcGIS', 'MapInfo', 'Map-Object 2.0', 'DDE', 'ArcView']
	},
	{
		ind:8,
		icon: "fa fa-motorcycle fa-3x",
		title:"Tandem 4.0",
		text:"<ul><li>Workshop Management System - Tandem assist in business management, improve client relationships, increase employee efficiency and to have a smoother and more systematic workflow</li></ul>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'SQL Server', 'Classic VB']
	},
	{
		ind:9,
		icon: "fa fa-book fa-3x",
		title:"Edify",
		text:"<ul><li>Developed Edify [A Complete School] Software. It contains the complete system of schooling and helpful for the Top Management, Teachers and Parents/Guardians with SMS facility on almost every event.</li></ul>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'SQL Server', 'Classic VB']
	},
	{
		ind:10,
		icon: "fa fa-bullseye fa-3x",
		title:"ALAS",
		text:"<ul><li>Municipal Council to renew the arm licenses.</li><li>Auto defaulters lists</li><li>Generic Query for almost all types of searches</li></ul>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'MS-Access', 'Classic VB']
	},
	
	{
		ind:11,
		icon: "fa fa-television fa-3x",
		title:"DinBhar News",
		text:"<ul><li>Developed Software for the News Channel. The first fully functional computerized News channel. This Software is capable enough to remotely schedule the programs to be shown. The advertisement and channel logos can be animated and marquee of the channel can be edited while the show goes on.</ul></li>",
		techUsed:['Microsoft Visual Basic 6.0 Standard Edition', 'WinForms', 'VB6.0', 'MS-Access', 'Classic VB']
	},
	{
		ind:12,
		icon: "fa fa-map fa-3x",
		title:"GIS - Land Records",
		text:"<ul><li>Envisaged the needs of Land Records Department developed GIS based software for Kerala Land Records.</li><li>Worked on communication interface with ArcView, ArcGIS using Dynamic Data Exchange (DDE)</li><li>Implemented MapObjects 2.0 ActiveX for showing the vector maps.</li></ul>",
		techUsed:['Visual Basic 6.0', 'MS-Access', 'ArcGIS', 'MapInfo', 'Map-Object 2.0', 'DDE', 'ArcView']
	}];	
  
}
