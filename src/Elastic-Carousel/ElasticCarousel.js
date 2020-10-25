import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Card/Card';


// Links to cover image

const Htm = 'https://static3.makeuseofimages.com/wp-content/uploads/2017/09/HTML-Effects-Featured.jpg';
const css = 'https://cdn.lynda.com/course/5038219/5038219-637366338628117163-16x9.jpg';
const sass = 'https://www.loginworks.com/blogs/wp-content/uploads/2017/12/sass-a-revolution-in-css-world.jpg';
const bootStrap = 'https://i.morioh.com/2019/12/17/f1ce6a0af5cb.jpg';
const javaS = 'https://i.ytimg.com/vi/Z5uhFcg4lRg/maxresdefault.jpg';
const react = 'https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg';
const vue = 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1';
const angular = 'https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2017/09/Why-AngularJS-A1.jpg';
const nodejs = 'https://static.antyweb.pl/wp-content/uploads/2018/05/31172710/nodejs-frameworks-1420x670.png';
const express = 'https://res.cloudinary.com/practicaldev/image/fetch/s--00h6CjGb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.maxrooted.com/panduan-membangun-rest-api-expressjs-mysql/cover.png';
const git = 'https://codersera.com/blog/wp-content/uploads/2019/10/git.0.jpg';
const gitHub = 'https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png';
const postgresql = 'https://developer.asustor.com/uploadIcons/0020_999_1596537545_PostgreSQL.png';
const python = 'https://content.techgig.com/photo/67459231/python-is-the-programming-language-of-the-year-for-2018.jpg?50999';
const java = 'https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg';
const data = 'https://specials-images.forbesimg.com/imageserve/5f492fd1ddb201935c58e438/960x0.jpg?fit=scale';
const algo = 'https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg';
const structure = 'https://builtin.com/sites/default/files/styles/medium/public/2018-08/artificial-intelligence-companies.jpg';
const mani = 'https://images.theconversation.com/files/286835/original/file-20190804-117866-1q7tbvy.jpg?ixlib=rb-1.1.0&rect=168%2C210%2C6851%2C4451&q=45&auto=format&w=496&fit=clip';
const ai = 'https://www.coe.int/documents/365513/10877703/speech-Ai-Helsinki-2019-870x489.jpg/15893919-49cb-018d-e6db-2603133098ba';
const ai2 = 'https://viterbischool.usc.edu/wp-content/uploads/2020/08/CAIS.jpg';



class Elastic extends Component {

    breakPoints = [
        { width: 1, itemsToShow: 1}, 
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 }
    ];

    state = {
        screen: 4
    }

   

    render() {

        return(
            <Carousel itemsToShow = { this.state.screen } itemsToScroll = { 4 } easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}>

                <Card header = 'JavaScript' title = 'Programming Language' cover = { javaS } draggable = 'false' />
                <Card header = 'Html' title = 'Markup Language' cover = { Htm } />
                <Card header = 'Css' title = 'Cascading style sheet' cover = { css } />
                <Card header = 'Sass' title = 'Preprocessor' cover = { sass } />
                <Card header = 'BootStrap' title = 'Css Library' cover = { bootStrap} />
                <Card header = 'React' title = 'JavaScript Library' cover = { react } />
                <Card header = 'Angular' title = 'JavaScript Framework' cover = { angular } />
                <Card header = 'Vue' title = 'JavaScript Library' cover = { vue } />
                <Card header = 'NodeJs' title = 'JavaScript Library' cover = { nodejs } />
                <Card header = 'Express' title = 'Programming Language' cover = { express } />
                <Card header = 'AI' title = 'ARTIFICIAL INTELLIGENCE' cover = { ai } />
                <Card header = 'AI' title = 'ARTIFICIAL INTELLIGENCE' cover = { ai2 } />
                <Card header = 'Machine Learning' title = 'Programming Language' cover = { algo } />
                <Card header = 'Machine Learning' title = 'Programming Language' cover = { mani } />
                <Card header = 'Java' title = 'Programming Language' cover = { java } />
                <Card header = 'Git' title = 'Control Tools' cover = { git } />
                <Card header = 'GitHub' title = 'Control Tools' cover = { gitHub }  />
                <Card header = 'Python' title = 'Programming Language' cover = { python } />
                <Card header = 'PostgreSQL' title = 'DataBase' cover = { postgresql } />
                <Card header = 'Data' title = 'AI' cover = { data } />
                <Card header = 'Structure' title = 'AI' cover = { structure } />

            </Carousel>
        );
    }
}


export default Elastic;