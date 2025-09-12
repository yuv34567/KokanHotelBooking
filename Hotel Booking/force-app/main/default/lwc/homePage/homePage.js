import { LightningElement } from 'lwc';
import kokanHomePageImages from '@salesforce/resourceUrl/KokanHomePageImages';
import LOGINPAGE from './loginPage.html';
import HOMEPAGE from './homePage.html';
import SIGNUPPAGE from './signupPage.html';

export default class HomePage extends LightningElement {

    // KokanHomeImg = [
    //     `background-image: url(${kokanHomePageImages}/KokanHomePageImages/KokanImg1.jpg);`,
    //     `background-image: url(${kokanHomePageImages}/KokanHomePageImages/KokanImg2.jpg);`,
    //     `background-image: url(${kokanHomePageImages}/KokanHomePageImages/KokanImg3.jpg);`,
    //     `background-image: url(${kokanHomePageImages}/KokanHomePageImages/KokanImg4.jpg);`
    // ];
    loginpage = LOGINPAGE;
    homepage = HOMEPAGE;
    signuppage = SIGNUPPAGE;

    buttonclick = this.loginpage;
    KokanHomeImg = [
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg1.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg2.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg3.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg4.jpg`
    ];

    currentIndex = 0;
    currentImage;
    prevImage;
    connectedCallback(){
        this.currentImage = `background-image: url(${this.KokanHomeImg[this.currentIndex]});`;
        this.prevImage = `background-image: url(${kokanHomePageImages}/KokanHomePageImages/KokanImg4.jpg);`;
        setInterval(()=>{
            this.currentIndex = (this.currentIndex + 1) % this.KokanHomeImg.length;
            this.updateBackground();
        },60000);
    }

    updateBackground() {
        this.currentImage = `background-image: url(${this.KokanHomeImg[this.currentIndex]});`;
        this.prevImage = `background-image: url(${this.KokanHomeImg[this.currentIndex - 1]});`;
    }

    handleSignup(){
        this.buttonclick = 'signup';
    }
    handleLogin(){
        this.buttonclick = 'login';
    }
    render(){
        return  this.buttonclick == 'signup' ? this.signuppage : this.buttonclick == 'login' ? this.loginpage:this.loginpage;
    }
    
}