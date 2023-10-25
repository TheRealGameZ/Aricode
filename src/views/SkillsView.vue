<script setup>
    import { ref } from 'vue';

    const selectedItem = ref('about');
    const selectItem = (item) => {
        selectedItem.value = item;
    }
</script>

<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-10">
                    <div v-if="selectedItem === 'about'">
                        <p>I&#x27;m a <strong>software engineer</strong> based in Gera with	<strong>2 years of experience</strong> in Commerce. My focus area for the past few months has been a mix of front- and backend development in Salesforce B2B Commerce.</p>
                    </div>
                    <div v-else-if="selectedItem === 'experience'">
                        <h3 >Software Engineer II</h3>
                        <p>dotSource SE<em>, Jena, Germany – (Dec 2022 - Present)</em></p>
                        <ul>
                            <li><p>Specialized Fullstack Web Developer in Salesforce with a focus on B2B Commerce and Commerce Cloud</p></li>
                            <li><p>Started the implementation of Headless-Salesforce Architecture, establishing its presence within the company</p></li>
                            <li><p>Contributed to the creation of tailored webshops for clients, showcasing expertise in Salesforce technologies</p></li>
                            <li><p>Played a pivotal role in the &quot;Code-Camp,&quot; imparting foundational skills in CSS, HTML, and JavaScript to students</p></li>
                        </ul>

                        <h3 >Software Engineer</h3>
                        <p >Plan-Soft Einrichtungsplanung GmbH<em>, Gera, Germany – (Okt 2021 - Dec 2022)</em></p>
                        <ul >
                            <li ><p>Proficient in creating customized website designs using CMS systems such as WordPress, including HTML and CSS</p></li>
                            <li ><p>Gained initial experience in Shopify and Shopware, demonstrating versatility in adapting to various e-commerce platforms</p></li>
                            <li ><p>Successfully developed a feature-rich app launcher using WPF/XAML and C#, showcasing advanced skills in desktop application development</p></li>
                            <li ><p>Established and configured a terminal server for a client,	demonstrating expertise in server infrastructure deployment</p></li>
                            <li ><p>Provided ongoing support and maintenance for IT hardware, maintaining close communication with clients to address issues promptly</p></li>
                        </ul>

                        <h3 >IT-Soldier</h3>
                        <p >Bundeswehr<em>, Sonderhausen, Germany– (Sep 2020 - Okt 2021)</em></p>
                        <ul>
                            <li ><p>Served as an IT soldier, contributing to the operational efficiency of	the IT department </p></li>
                            <li ><p>Provided administrative assistance to the IT department, ensuring smooth operations and effective communication</p></li>
                            <li ><p>Conducted maintenance and configuration tasks for IT hardware, ensuring optimal performance</p></li>
                            <li ><p>Assisted in the training of new recruits, contributing to the onboarding process and knowledge transfer</p></li>
                        </ul>
                    </div>
                    <div v-else-if="selectedItem === 'skills'">
                        <div>
                            <div>
                                <h3>Programming languages</h3>
                                <ul>
                                    <li >Java</li>
                                    <li >JavaScript </li>
                                    <li >C#</li>
                                    <li >Object Pascal</li>
                                    <li >HTML / CSS</li>
                                    <li >WPF / XAML</li>
                                </ul>
                            </div>
                            <div>
                                <h3 >Other</h3>
                                <ul>
                                    <li >Springboot and Thymeleaf</li>
                                    <li >JS-Frameworks: Vue.js</li>
                                    <li >Salesforce / Salesforce Commerce Cloud</li>
                                    <li >Git, GitHub, GitLab</li>
                                    <li >Jira, Confluence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="selectedItem === 'contact'">
                        <h3>Contact</h3>
                        <a href="mailto:Andreas_Richter22@gmx.net">📧Andreas_Richter22@gmx.net</a>
                        <a href="https://www.linkedin.com/in/andreas-richter-8b1688246?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile">🔗Linkedin</a>
                        <a href="http://aricode.de">🌐 aricode.de</a>
                        <a href="tel:017641577221">📞 +4917641577221</a>
                    </div>
                    <div v-else-if="selectedItem === 'languages'">
                        <p >🇩🇪 German - Native Language</p>
                        <p >🇱🇷 Englisch - B2/C1</p>
                        <p >🇷🇺 Russian - Basic Knowledge</p>
                    </div>
                    <div v-else-if="selectedItem === 'education'">
                        <p >Bachelor&#x27;s Degree in Business	Informatics</p>
                        <p ><em>2021-2024, Duale Hochschule	Gera-Eisenach, Gera</em></p>
                        <p >Abitur in Grammar-school</p>
                        <p><em>2010-2020, Spalatin-Gymnasium,Altenburg</em></p>
                    </div>
                </div>
                <div class="col ">
                    <div class="navCard"><a @click="selectItem('about')" href="#">About me</a></div>
                    <div class="navCard"><a @click="selectItem('experience')" href="#">Experience</a></div>
                    <div class="navCard"><a @click="selectItem('skills')" href="#">Skills</a></div>
                    <div class="navCard"><a @click="selectItem('contact')" href="#">Contact</a></div>
                    <div class="navCard"><a @click="selectItem('languages')" href="#">Languages</a></div>
                    <div class="navCard"><a @click="selectItem('education')" href="#">Education</a></div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>


.content .col a{
    display: block;
    text-align: center;
    border-bottom: 3px solid;
    border-image: linear-gradient(45deg, turquoise, greenyellow) 1;
}

.content .col{
    margin-left: 2rem;
}

.content .row{
    padding: 2em;
}


.navCard {
    height: 5em;
    text-align: center;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3em;

}

.navCard:hover {
    transform: scale(1.05);
}

.navCard:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.customBorder{
    border-left: 5px solid;
    border-bottom: 5px solid;
    border-image: linear-gradient(45deg, turquoise, greenyellow) 1;
}


</style>