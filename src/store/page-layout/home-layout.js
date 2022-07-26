import PageLayoutStore from '.';
import { imageHelper } from '../../utility/ImageHelper';
import { myOpacityStyle } from '../../utility/PageLayoutHelper';
import SectionListStore from './section-list';
import AngularSectionStore from './section-list/angular-section';
import BannerStore from './section-list/angular-section/banner';
import SectionLinkStore from './section-list/angular-section/section-link';

let homePageLayout = new PageLayoutStore();
let homePageSectionList = new SectionListStore();
homePageLayout.setSectionList(homePageSectionList);

let musicSection = new AngularSectionStore("music");
musicSection.setOpacityAsTab(myOpacityStyle);
musicSection.setHoverBackgroundName("lightGrey");
musicSection.setHoverBackgroundColor("#DDD");

let musicBanner = new BannerStore();
musicBanner.setBannerImage(imageHelper.customLogos.jmMusicLogo.image);
musicBanner.setAltText(imageHelper.customLogos.jmMusicLogo.alt);

let soundcloudLink = new SectionLinkStore("SoundCloud");
soundcloudLink.setUrl("https://soundcloud.com/jacques_mathieu");
soundcloudLink.setLogo(imageHelper.appLogos.soundcloudLogo);
soundcloudLink.setHoverBackgroundColor("#F50");
soundcloudLink.setHoverBackgroundName("scloudOrange");

musicSection.setBanner(musicBanner);
musicSection.setSectionLinkList([soundcloudLink]);

homePageSectionList.addSection(musicSection);

let projectsSection = new AngularSectionStore("projects");
projectsSection.setOpacityAsTab(myOpacityStyle);
projectsSection.setHoverBackgroundName("lightBlueGrey");
projectsSection.setHoverBackgroundColor("#DDEEDD");

let projectsBanner = new BannerStore();
projectsBanner.setBannerImage(imageHelper.customLogos.jmProjectLogo.image);
projectsBanner.setAltText(imageHelper.customLogos.jmProjectLogo.alt);

let githubLink = new SectionLinkStore("GitHub");
githubLink.setUrl("https://github.com/Jmathieu14");
githubLink.setLogo(imageHelper.appLogos.githubLogo);
githubLink.setHoverBackgroundColor("#A54AB0");
githubLink.setHoverBackgroundName("githubDesktopPurple");

let codepenLink = new SectionLinkStore("Codepen.io");
codepenLink.setUrl("https://codepen.io/jmathieu145");
codepenLink.setLogo(imageHelper.appLogos.codepenLogo);
codepenLink.setHoverBackgroundColor("#0EBEFF");
codepenLink.setHoverBackgroundName("hyperlinkBlue");

projectsSection.setBanner(projectsBanner);
projectsSection.setSectionLinkList([githubLink, codepenLink]);

homePageSectionList.addSection(projectsSection);

let workSection = new AngularSectionStore("work");
workSection.setOpacityAsTab(myOpacityStyle);
workSection.setHoverBackgroundName("gray");
workSection.setHoverBackgroundColor("#AAA");

let workBanner = new BannerStore();
workBanner.setBannerImage(imageHelper.customLogos.jmWorkLogo.image);
workBanner.setAltText(imageHelper.customLogos.jmWorkLogo.alt);

let linkedinLink = new SectionLinkStore("LinkedIn");
linkedinLink.setUrl("https://www.linkedin.com/in/jacques-mathieu-743389119/");
linkedinLink.setLogo(imageHelper.appLogos.linkedinLogo);
linkedinLink.setHoverBackgroundColor("#0077B5");
linkedinLink.setHoverBackgroundName("linkedInHoverBlue");

let resumeLink = new SectionLinkStore("Resume");
resumeLink.setUrl("../pdf/JSMathieu Resume Redesign - 04-09-2020.pdf");
resumeLink.setLogo(imageHelper.utilityLogos.resumeIcon);
resumeLink.setHoverBackgroundColor("#33ff5f");
resumeLink.setHoverBackgroundName("goodGreen");

let exampleWorkLink = new SectionLinkStore("Example Work");
exampleWorkLink.setUrl("/example-work");
exampleWorkLink.setLogo(imageHelper.utilityLogos.exampleWorkIcon);
exampleWorkLink.setHoverBackgroundColor("#3dffb9");
exampleWorkLink.setHoverBackgroundName("turqoise");
exampleWorkLink.setIsRouterLink(true);
exampleWorkLink.setTarget("_self");

workSection.setBanner(workBanner);
workSection.setSectionLinkList([linkedinLink, resumeLink, exampleWorkLink]);

homePageSectionList.addSection(workSection);

homePageLayout.setActiveState(true);

export default homePageLayout;