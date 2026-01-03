import { LightningElement } from 'lwc';
import kokanHomePageImages from '@salesforce/resourceUrl/KokanHomePageImages';
import LOGINPAGE from './loginPage.html';
import HOMEPAGE from './homePage.html';
import SIGNUPPAGE from './signupPage.html';
import sendUserInfo from '@salesforce/apex/sendUserInfoIntegration.sendUserInfo';

export default class HomePage extends LightningElement {
    //
    showSubmit ;
    


    currentIndex = 0;
    currentImage;
    prevImage;
    amountval = 0;
    signupinput = {};
    logininput = {};

    loginpage = LOGINPAGE;
    homepage = HOMEPAGE;
    signuppage = SIGNUPPAGE;

    buttonclick;
    KokanHomeImg = [
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg1.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg2.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg3.jpg`,
        `${kokanHomePageImages}/KokanHomePageImages/KokanImg4.jpg`
    ];

    // home js
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
        // this.prevImage = `background-image: url(${this.KokanHomeImg[this.currentIndex - 1]});`;
    }

    Fullname;

    // signup js
    handlesignupinput(event){
        console.log('hello');
        console.log(event.target.name+ '=>' +event.target.value);
        if(event.target.value){
            this.signupinput[event.target.name] = event.target.value;
        }
        this.showSubmit = this.signupinput.Fullname !== '';
    }

    handlesignupsubmit(){
        console.log('signupinput'+this.signupinput);
        console.log('signupinput'+JSON.stringify(this.signupinput));
        console.log('this.signupinput.Fullname => '+this.signupinput.Fullname);
        sendUserInfo({
            jsonPayload: JSON.stringify({
                Fullname: this.signupinput.Fullname
            })
        })
        .then(() => {
            // Async callout → success means job queued
            alert('User data submitted successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // login js
    handlelogininput(event){
        console.log('hello');
        console.log(event.target.label+ '=>' +event.target.value);
        if(event.target.value){
            this.logininput[event.target.label] = event.target.value;
        }
    }
    handlelogininsubmit(){
        console.log('logininput'+this.logininput);
        console.log('logininput'+JSON.stringify(this.logininput));
    }
     
    // home js
    handleSignup(){
        this.buttonclick = 'signup';
    }
    handleLogin(){
        this.buttonclick = 'login';
    }
    handleHome(){
        this.buttonclick = 'home';
    }
    render(){
        return  this.buttonclick == 'signup' ? this.signuppage : this.buttonclick == 'login' ? this.loginpage: this.homepage;
    }

    
}