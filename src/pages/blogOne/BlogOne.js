import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

import image8 from '../../images/IMG8.png';
import image9 from '../../images/IMG9.png';
import image12 from '../../images/IMG12.png';
import image13 from '../../images/IMG13.png';
import image14 from '../../images/IMG14.png';
import image15 from '../../images/IMG15.png';
import image16 from '../../images/IMG16.png';

import './blogOne.css';
import BlogSeven from '../../components/blog-pages/BlogSeven';
import BlogEight from '../../components/blog-pages/BlogEight';
import BlogNine from '../../components/blog-pages/BlogNine';
import BlogTen from '../../components/blog-pages/BlogTen';

const blog = [
  {
    title: 'We are launching',
    text1:
      "Humans are curious, and learning new things is in their nature. In today's fast-paced world, we would be interested in learning hundreds of skills. However, what happens when we get the time to learn those skills? Unfortunately, most of us do not find a reliable platform to find engaging courses that can teach us the skills we are interested in learning. ",
    text2:
      'eLearning has provided us with a structured way to develop new skills and grow using them in physical work. Due to the recent shutdown importance and popularity of eLearning have rapidly increased. ',
    text3:
      'eLearning has provided us with a structured way to develop new skills and grow using them in physical work. Due to the recent shutdown importance and popularity of eLearning have rapidly increased. ',
    title1: 'An insight into what is Enki Connect?',
    text4:
      'Enki Connect is an Australia-based company founded in 2021 with the mission to connect people from around the globe by teaching them special skills online. So, the curiosity for learning new things has been there since the beginning, but with the increasing pressure due to war, covid and technology, our learning methods have changed. ',
    text5:
      'In Enki Connect, Enki means protector of human wisdom, learning, understanding and preferring people first. However, we need to focus on an eLearning platform that allows people to get into deeper aspects of learning skills. ',
    text6:
      'At Enki Connect, the students will get a platform that will guide them to various advisors from various skill sets, industries and countries. Also, we have 1 to 1 live a platform that will provide students with the freedom to connect with their mentors and get the guidance they seek. ',
    text7:
      'We believe that people have the potential, and with the right guidance, they can achieve the unimaginable. So, at Enki Connect, we offer you a detailed bio of the advisors. So, you can know more about their skills, expertise and personalities before selecting the right advisor for yourself. Advisors will help you learn new skills and build your portfolio, which will have a lasting impact on your career. ',
    title2: 'Our Branding Pillars and Moto ',
    text8:
      "Enki Connect's motto is Learn, Share and Earn. Students can easily achieve these goals by using our app. We are readying to take learning skills to new heights with our following pillars. ",
    title3: 'Our Vision to understand us better:',
    text9:
      'Our vision is to make more knowledge accessible for everyone so that the world can grow together. We believe that everyone deserves equal learning opportunities. Therefore, regardless of your educational background, we are here with an eLearning platform where you can freely learn any skill you desire.',
    title4: 'Our Mission ',
    text10:
      'Enki Connect is a platform that can assist the human desire of exploring, developing and discovering new knowledge with personalized and live learning 1 to 1 connection. We want to make it easier for students to connect with the best mentors in their respective industries. With Enki Connect, you can quickly get access to your desired advisor without having to wait for hours. ',
    title5: 'Our Values we will maintain',
    text11:
      'We strictly work by our values because it helps us improve and provide better learning opportunities and environments to our students. Our values are. ',

    title6: 'How Enki Connect is innovative and different?',
    text12:
      'There are numerous eLearning platforms with a plethora of information and knowledge. So, you must be wondering what makes Enki Connect different and innovative from others. Here are a few reasons to help you understand why we are unique. ',
    subTitle1: '1. Personalization',
    text13:
      'Enki Connect provides you with personalized courses, learning programs and connections with your advisors. Thus, you will not have to learn from pre-recorded lectures and videos where you will not even find the answers to your confusions. Moreover, we will allow you to have one on one connections with your mentors so you can resolve all your confusion. ',
    subTitle2: '2. Active and Social Learning Experience',
    subTitle3: '3. Live Sessions',
    subTitle4: '4. Advisor based, not course-based services',
    subTitle5: '5. Catalog of advisors from all different parts of the world.',
    subTitle6: '6. Giving the knowledge-sharing power back to the people.',
    title7: 'Do not miss this learning opportunity!',
    text14:
      'We offer an active social learning platform where you can easily find and connect with a mentor any time that you desire. So, you can connect with other members and share your confusions to get authentic responses which will be helpful in the long run. ',
    text15:
      'The biggest benefit of learning from Enki Connect is that we offer live session facilities. You can connect with your advisors through a class or have a personal session. So, it means you will have the freedom of connection and will not have to wait for days for the course to start. ',
    text16:
      'Enki Connect does not offer course-based facilities because we know it gets boring with time, and you might be interested in learning several skills. Thus. We have a special advisor-based platform where you can connect with a new advisor every day, which means you will be learning new skills every day and have all information you need in a limited time. ',
    text17:
      'At Enki Connect, we believe that our world is full of highly intellectual people. Thus, we have collected all the best advisors worldwide on a single platform. Moreover, people can become each other advisors depending on the skill they know. Therefore, it means you can teach and learn at the same time. ',
    text18:
      'Knowledge is a power that grows with sharing, and we are giving this power back to people. At Enki Connect, everyone is a seeker and an advisor. We are here to help you improve your strengths, confidence and knowledge.',
    text19:
      'It is once in a lifetime opportunity that you should never miss. You can find all experts at Enki Connect who will share their knowledge with you to help you grow. ',
    text20:
      'So, you will not only be learning a new skill but also improving your expertise. Without wasting a single second, sign up start learning. ',
  },
  {
    title:
      'How Skill Focused eLearning Is Beneficial To Training In The Corporate World',
    title2: 'Benefits To Employers & Employees',
    title3: 'Changes To The Traditional Workforce',
    title4: 'Skill-Focused eLearning As The Key To Success',
    title5: 'The Bottom Line',

    text1:
      'Discover why skill-focused platforms are the key to success in a world of changing workforce',
    text2:
      'In current days, skills have become more valuable than some traditional academic-degree knowledge, creating a starting point for eLearning companies to provide people with useful tools and resources to meet these standards, as well as to create their own. The professional world we know today is not the same as the one presented decades ago, and a few factors have to do with this.',
    text3:
      'Not only did the evolution and massive accessibility of technology and social media change the path for many, in terms of choosing their career or deciding to found their own business, but also showed a new way of teaching and learning, which showed impressive results. In this article, you can learn about the importance of skill-focused eLearning and why it is the future of the professional world, featuring useful facts and information about the topic, as well as Enki Connect???s mission towards building a better professional and intrapersonal environment for future leaders.',
    text4:
      'Skill-focused eLearning has many innovative benefits for both employers and employees due to several factors such as specialization, efficiency, flexibility, and new ways of teaching/learning. Since the outbreak of COVID-19, where the world faced a major change in the way it worked and learned, the professional environment started to shift towards a more skill-based hiring process, rather than the typical (and for many, ancient) academic-degree criteria.',
    text5:
      'An article published by Forbes discussed this topic by exposing not only the importance of skill-focused learning and hiring but also why it is becoming the future. Reinforcing this point of view by stating that ???skills-based hiring focuses not only on priority technical skills but foundational and transferable skills???. Many authors and well-known HR representatives agreed on a brief but much-looked-at list of skills that companies nowadays are beginning to shift towards, with some including excellent communication with clients, personnel, and employers, proper collaboration with coworkers and every aspect of teamwork, critical thinking (which helps with problem-solving and bringing innovative ideas to the table), proactivity and executive abilities, that are great for coming up with new products, ways of improvement and being able to work on your own without trouble.',
    text6:
      'Although some kind of academic knowledge is required by most companies, the way people can access education has drastically changed, and for the better. Enki Connect, for example, provides users all around the world with an excellent and very well-prepared skill base with over 60 different skills taught and growing, including recreational topics and current topics that dictate the world???s functioning, as well as a flexible interface with innovative tools that make the learning process smoother and more efficiently. Video calls, chat, and advisor catalogs are available to make sure users can have a wide range of resources ready for them to connect with others and learn their next skill, which will contribute to having more job opportunities in the future.',
    text7:
      'Platforms like Enki Connect are another reason why skill-focused learning has begun to rise at a rapid speed, catching employers??? attention. Online learning provides a series of unmatched benefits while still offering quality content and the necessary tools and resources to shape future leaders. The younger workforce has shown a tendency for more flexibility, which allows them to manage their own times and do their job more efficiently, as well as preferring more specialized skills rather than focusing on a wide set of abilities at once. The eLearning world is perfect for this because users can manage their schedule while receiving top-class education on the specialized topics they like, promoting their participation and creating more opportunities for them to join a professional team they feel fond of (which has been shown to produce better results in companies and a boost in sales), which is the backbone of every business.',
    text8:
      'It is no secret that the professional world is in a different shape than 30 years ago, but how deep are the changes in the current workforce, and what does skill-focused eLearning have to do with it?.',
    text9:
      'To begin, the global work point of view has changed due to the younger generations raising questions regarding traditional ways of learning and working, which contributed to the massive change around the globe. This was accompanied by the drastic turnaround of events in the different episodes that happened in the world, such as manifestations regarding human and workers rights, as well as the explosion of social media and eLearning platforms, which provided a new way of interacting with others while learning quality skills that can help them have better chances at having a brighter future.',
    text10:
      'Of course, there are still some traditional traits in the current workforce, but compared to previous years the change can be easily spotted. Flexible platforms like Enki Connect can help millions of users access quality education in the comfort of their home or any place they???d like and connect with certified advisors. This last point is a great resource on its own, thus there have been studies on the importance of mentors in a business and how being around successful people can help people achieve their goals and acquire valuable life skills.',
    text11:
      'The World Bank Group published an article about this topic, explaining that ???mentoring has been shown to lead to the development of coping skills and an increased willingness to challenge oneself and attempt new experiences. Mentors can also serve as role models who help grow girls??? aspirations and provide them with active reinforcement to overcome gender bias in labor markets???. Enki Connect is a skill-based advisor platform that goes deeper than traditional learning systems, which helps people maximize their professional careers with technological tools they use every day.',
    text12:
      'Due to the pandemic of COVID-19, a lot of investigation has been made around the traditional way of learning, which resulted in several critical points to be improved, such as efficiency, subjects chosen, resources, and time employed. Online platforms like Enki Connect paid special attention to what the world was saying about this, focusing on young people trying to enter the professional world and adults who were starting to raise questions about their tasks and skills required, and formed a top-class eLearning platform that has helped hundreds of users achieve their goals.',
    text13:
      'Skill-focused eLearning is truly the key to success because people can easily access platforms from anywhere in the world, with either their phones or computers and select their favorite subjects in a far-reaching skills base, with the help of certified advisors that want to share their abilities and knowledge with the world. Excited students meet the world???s most successful advisors in a flexible and much-needed eLearning platform that is set for success in a world of changing the workforce. Enki Connect???s motto ???Learn. Share. Earn??? does justice to the platform???s vision towards the new generation of both employers and employees that are looking for the best and most efficient ways of improvement to have a better future.',
    text14:
      'Enki Connect is the most promising and fast-growing eLearning platform available, offering users the possibility to access a far-reaching skill base of over 60 different abilities taught and growing, as well as useful connections with certified advisors that teach with innovative resources such as video calls and chat. The skills range from traditional subjects such as industrial design, communication, computing, and mathematics, to current-day topics that recruiters are looking for like blockchain, big data analysis, corporate communications, and ethical hacking.',
    text15:
      'The wide catalog offered shows how immense the world of teaching-learning is, and how many successful people want to share their skills and knowledge with others to inspire and encourage them to build a better future. Since the evolution of technology, many platforms have arisen to provide students and general users with the possibility to learn something new, but what separates Enki Connect from others is the special attention paid to what the world was saying it needed; traditional subjects are always great to provide, but what about current-event topics that are shaping our economy? The example of cryptocurrencies is great to showcase how important it is to offer a far-reaching catalog of skills, such as blockchain that can be found on Enki Connect???s platform.',
    text16:
      'For all these reasons manifested by the people around the world is that Enki Connect was able to carefully design and launch an efficient and flexible platform with everything needed to succeed in a world of changing workforce. Freedom of schedule, current subjects, and connection with some of the world???s most successful teachers, Enki Connect presents a new way of learning and teaching.',
  },
  {
    title:
      'C??mo La Educaci??n En L??nea Especializada En Las Habilidades Beneficia La Formaci??n En El Mundo Empresarial',
    title2: 'Beneficios Para Empleadores Y Empleados',
    title3: 'Cambios En La Fuerza Laboral Tradicional',
    title4: 'El Elearning Centrado En Las Habilidades Como Clave Del ??xito',
    title5: 'Conclusi??n',

    text1:
      'Descubra por qu?? las plataformas centradas en las habilidades son la clave del ??xito en un mundo laboral cambiante',
    text2:
      'En la actualidad, las habilidades se han vuelto m??s valiosas que algunos conocimientos tradicionales de grado acad??mico, creando un punto de partida para que las empresas de eLearning proporcionen a las personas herramientas y recursos ??tiles para cumplir con estos est??ndares, as?? como para crear los suyos propios. El mundo profesional que conocemos hoy no es el mismo que se present?? hace d??cadas, y algunos factores tienen que ver con esto.',
    text3:
      'La evoluci??n y la accesibilidad masiva de la tecnolog??a y las redes sociales no solo cambiaron el rumbo para muchos, en t??rminos de elegir su carrera o decidir fundar su propio negocio, sino que tambi??n mostraron una nueva forma de ense??ar y aprender, que arroj?? resultados impresionantes. En este art??culo, puede aprender sobre la importancia del eLearning centrado en habilidades y por qu?? es el futuro del mundo profesional, presentando hechos ??tiles e informaci??n sobre el tema, as?? como la misi??n de Enki Connect de construir un mejor entorno profesional e intrapersonal para futuros l??deres.',
    text4:
      'El eLearning centrado en las habilidades tiene muchos beneficios innovadores tanto para los empleadores como para los empleados debido a varios factores, como la especializaci??n, la eficiencia, la flexibilidad y las nuevas formas de ense??ar y aprender. Desde el brote de COVID-19, donde el mundo enfrent?? un cambio importante en la forma en que trabajaba y aprend??a, el entorno profesional comenz?? a cambiar hacia un proceso de contrataci??n m??s basado en habilidades, en lugar del t??pico (y para muchos, antiguo) acad??mico.',
    text5:
      'Un art??culo publicado por Forbes discuti?? este tema al exponer no solo la importancia del aprendizaje y la contrataci??n centrada en las habilidades, sino tambi??n sobre por qu?? se est?? convirtiendo en el futuro. Reforzando este punto de vista al afirmar que ???la contrataci??n basada en competencias se centra no solo en las competencias t??cnicas prioritarias sino tambi??n en las competencias fundamentales y transferibles???.',
    text6:
      'Muchos autores y reconocidos representantes de RR.HH. acordaron en una lista breve pero muy centrada de habilidades hacia las que las empresas est??n comenzando a enfocarse, algunas de las cuales incluyen una excelente comunicaci??n con los clientes, el personal y los empleadores, la colaboraci??n adecuada con los compa??eros de trabajo y todos los aspectos de trabajo en equipo, pensamiento cr??tico (que ayuda a resolver problemas y traer ideas innovadoras a la mesa), proactividad y habilidades ejecutivas, que son excelentes para idear nuevos productos, formas de mejora y poder trabajar por cuenta propia sin problemas.',
    text7:
      'Aunque la mayor??a de las empresas requieren alg??n tipo de conocimiento acad??mico, la forma en que las personas pueden acceder a la educaci??n ha cambiado dr??sticamente y para mejor. Enki Connect, por ejemplo, proporciona a los usuarios de todo el mundo una base de habilidades excelente y muy bien preparada con m??s de 60 habilidades diferentes ense??adas y creciendo, incluidos temas recreativos y actuales que dictan el funcionamiento del mundo, as?? como una interfaz flexible con herramientas innovadoras que hacen que el proceso de aprendizaje sea m??s fluido y eficiente. Se encuentran disponibles videollamadas, chat y cat??logos de asesores para garantizar que los usuarios puedan tener una amplia gama de recursos listos para que se conecten con otros y aprendan su pr??xima habilidad, lo que contribuir?? a tener m??s oportunidades laborales en el futuro.',
    text8:
      'Las plataformas como Enki Connect son otra raz??n por la que el aprendizaje centrado en habilidades ha comenzado a aumentar a una velocidad r??pida, captando la atenci??n de los empleadores. El aprendizaje en l??nea proporciona una serie de beneficios inigualables al mismo tiempo que ofrece contenido de calidad y las herramientas y recursos necesarios para dar forma a los futuros l??deres. La fuerza laboral m??s joven ha mostrado una tendencia a una mayor flexibilidad, lo que les permite administrar su propio tiempo y hacer su trabajo de manera m??s eficiente, adem??s de preferir habilidades m??s especializadas en lugar de enfocarse en un amplio conjunto de habilidades a la vez.',
    text9:
      'El mundo del eLearning es perfecto para esto porque los usuarios pueden administrar su agenda mientras reciben educaci??n de primera clase sobre los temas que les gustan, promoviendo su participaci??n y creando m??s oportunidades para que se unan a un equipo profesional que les agrade (lo cual se ha demostrado que producir mejores resultados en las empresas y un impulso en las ventas), que es la columna vertebral de todo negocio.',
    text10:
      'No es ning??n secreto que el mundo profesional se encuentra en una forma diferente a la de hace 30 a??os, pero ??qu?? tan profundos son los cambios en la fuerza laboral actual y qu?? tiene que ver el eLearning centrado en las habilidades con esto?',
    text11:
      'Para empezar, el punto de vista del trabajo global ha cambiado debido a que las generaciones m??s j??venes han planteado preguntas sobre las formas tradicionales de aprender y trabajar, lo que contribuy?? al cambio masivo en todo el mundo. Esto fue acompa??ado por el dr??stico giro de los hechos en los diferentes episodios que sucedieron en el mundo, como las manifestaciones en torno a los derechos humanos y laborales, as?? como la explosi??n de las redes sociales y las plataformas de eLearning, que brindaron una nueva forma de interactuar con los dem??s y al mismo tiempo aprender habilidades de calidad que pueden ayudarlos a tener mejores oportunidades de tener un futuro mejor.',
    text12:
      'Por supuesto, todav??a hay algunos rasgos tradicionales en la fuerza laboral actual, pero en comparaci??n con a??os anteriores, el cambio se puede detectar f??cilmente. Las plataformas flexibles como Enki Connect pueden ayudar a millones de usuarios a acceder a una educaci??n de calidad desde la comodidad de su hogar o en cualquier lugar que deseen y conectarse con asesores certificados. Este ??ltimo punto es un gran recurso en s?? mismo, por lo que se han realizado estudios sobre la importancia de los mentores en una empresa y c??mo estar rodeado de personas exitosas puede ayudar a las personas a alcanzar sus metas y adquirir valiosas habilidades para la vida.',
    text13:
      'El Grupo del Banco Mundial public?? un art??culo sobre este tema, explicando que ???se ha demostrado que la tutor??a conduce al desarrollo de habilidades de afrontamiento y una mayor disposici??n para desafiarse a uno mismo e intentar nuevas experiencias. Los mentores tambi??n pueden servir como modelos que ayudan a hacer crecer las aspiraciones de las ni??as y les brindan un refuerzo activo para superar los prejuicios de g??nero en los mercados laborales???. Enki Connect es una plataforma de asesores basada en habilidades que va m??s all?? de los sistemas de aprendizaje tradicionales, lo que ayuda a las personas a maximizar sus carreras profesionales con las herramientas tecnol??gicas que utilizan todos los d??as.',
    text14:
      'Debido a la pandemia de COVID-19, se ha investigado mucho en torno a la forma tradicional de aprendizaje, lo que result?? en varios puntos cr??ticos a mejorar, como la eficiencia, las materias elegidas, los recursos y el tiempo empleado. Las plataformas en l??nea como Enki Connect prestaron especial atenci??n a lo que el mundo dec??a sobre esto, centr??ndose en los j??venes que intentaban ingresar al mundo profesional y los adultos que comenzaban a plantear preguntas sobre sus tareas y habilidades requeridas, y formaron una plataforma de eLearning de primera clase que ha ayudado a cientos de usuarios a alcanzar sus objetivos.',
    text15:
      'El eLearning centrado en las habilidades es realmente la clave del ??xito porque las personas pueden acceder f??cilmente a las plataformas desde cualquier lugar del mundo, ya sea con sus tel??fonos o computadoras y seleccionar sus materias favoritas en una base de habilidades de gran alcance, con la ayuda de asesores certificados que desean compartir sus habilidades y conocimientos con el mundo. Estudiantes entusiasmados conocen a los asesores m??s exitosos del mundo en una plataforma de aprendizaje en l??nea flexible y muy necesaria que est?? preparada para el ??xito en un mundo de cambios en la fuerza laboral. El lema de Enki Connect ???Aprende. Comparte. Gana??? hace justicia a la visi??n de la plataforma hacia la nueva generaci??n de empleadores y empleados que buscan las mejores y m??s eficientes formas de aprendizaje para tener un futuro mejor.',
    text16:
      'Enki Connect es la plataforma de aprendizaje en l??nea m??s prometedora y de r??pido crecimiento disponible, que ofrece a los usuarios la posibilidad de acceder a una base de habilidades de gran alcance, con m??s de 60 habilidades diferentes ense??adas y creciendo, as?? como conexiones ??tiles con asesores certificados que ense??an con recursos innovadores como videollamadas y chat. Las habilidades van desde materias tradicionales como dise??o industrial, comunicaci??n, inform??tica y matem??ticas, hasta temas actuales que los reclutadores buscan, como blockchain, an??lisis de big data y comunicaciones corporativas.',
    text17:
      'El amplio cat??logo que se ofrece muestra lo inmenso que es el mundo de la ense??anza-aprendizaje y cu??ntas personas exitosas quieren compartir sus habilidades y conocimientos con otros para inspirarlos y alentarlos a construir un futuro mejor. Desde la evoluci??n de la tecnolog??a, han surgido muchas plataformas para brindar a los estudiantes y usuarios en general la posibilidad de aprender algo nuevo, pero lo que separa a Enki Connect de los dem??s es la atenci??n especial que presta a lo que el mundo dec??a que necesitaba; Los temas tradicionales siempre son excelentes para ofrecer, pero ??qu?? pasa con los temas de actualidad que est??n dando forma a nuestra econom??a? El ejemplo de las criptomonedas es excelente para mostrar lo importante que es ofrecer un cat??logo de habilidades de gran alcance, como blockchain que se puede encontrar en la plataforma de Enki Connect.',
    text18:
      'Por todas estas razones manifestadas por personas de todo el mundo, Enki Connect pudo dise??ar y lanzar cuidadosamente una plataforma eficiente y flexible con todo lo necesario para tener ??xito en un mundo de fuerza laboral cambiante. Libertad de horarios, materias actuales y conexi??n con algunos de los profesores m??s exitosos del mundo, Enki Connect presenta una nueva forma de aprender y ense??ar.',
  },
  {
    title: 'The Importance Of Face To Face Learning',
    title2: 'Students Learn More And Understand Better',
    title3: 'It Makes Interactions Possible',
    title4: 'Introduces Innovative Tools That Allow Education To Expand',
    title5: 'How Enki Connect Contributes To Face To Face Learning',
    title6: 'The Bottom Line',

    text1:
      'Discover the benefits of live learning that become essential in today???s form of education.',
    text2:
      'In an era where technology can control almost every factor of a person???s life, education is often seen as threatened and ???close to the end???, though this can???t be further from the truth. Since the outbreak of COVID-19 where schools, colleges, and learning centers were forced to close, new ways to access education have been perfected, thus they have been existing for quite some time. These platforms and tools have helped education reach more students and have allowed people to learn new skills, develop professional abilities and build their professional self, which led to more job opportunities and career options.',
    text3:
      'Although technology provides excellent resources to learn, core values of education remain present, despite what people might think, such as face-to-face classes and discussions, which are essential to developing critical thinking, building an opinion, and facing other perspectives, among other important traits.',
    text4:
      'This post aims to demonstrate and showcase the importance of face to face learning in today???s society with the help of technology, by exposing the important work new systems and platforms do that allow education to be accessible for more people, in terms of costs and times, as well as how e-learning has positively impacted the way students retain information. Furthermore, this post points out how teachers can have more job opportunities during these difficult times by engaging in e-learning platforms to share their knowledge and get a rightful salary.',
    text5:
      'To achieve this, Enki Connect was created. An advanced platform that seamlessly connects students with verified advisors that have multiple skills and abilities, creating a unique and fruitful learning process to grow, build and perfect the world???s next professionals. Featuring a flexible interface with tools such as video calls, advisor catalog, chat and over 60 different skills taught and growing, including recreational topics and current topics that dictate the world???s functioning, Enki Connect provides a new way of accessing education.',
    text6:
      'Below there are three critical points in which face-to-face education comes in contact with present-day technology resources, featuring statistics and useful facts that can help users understand why this form of education will become the future.',
    text7:
      'Virtual learning, along with traditional face-to-face learning in a classroom, plays a major role in the understanding of a subject or topic for students. The COVID-19 pandemic resulted in the world???s complete stop and shift in the way we receive education, whether from school, college, or courses, which led to a huge internet-learning revolution.',
    text8:
      'The education spread during this period was carefully analyzed by many professionals to determine the quality of e-learning and education and how it can impact students and their future. Against all odds, e-class education showed impressive outcomes related to student participation, activity completion, and course-passing. One of the benefits of online teaching is the possibility for students to get answers at the moment they have them, helping them understand a topic better and reducing the possibilities of failing a class or losing motivation (which has been known for a long time that it can endorse dropping-out, with the assistance of other critical factors).',
    text9:
      'The benefits of online education go beyond staying at home and managing one???s schedule thus it has proven itself to be a solid, flexible form of learning that can improve students??? results and teachers??? work in the field.',
    text10:
      'A critical part of any student???s journey in school, that later continues in college or any form of higher education, is to interact with classmates and build strong relationships. One advantage of online classes is that it has helped shy students become more participative during class, thanks to being in a comfortable space of their own.',
    text11:
      'This shows that not only is important to participate with pairs and contribute to a topic discussion but to also understand that there are other ways to get to the same outcome; face-to-face interactions, whether online or in a physical classroom, keep education possible and promote students think outside of their perspective thus they have the opportunity to discuss their opinions and come up with new points of view they may have not been able to think about on their own.',
    text12:
      'Furthermore, e-learning can replicate the aspects of a physical classroom and the interactions that can result there, with students participating comfortably in the space of their choice, which leads to better understanding and proactive participation. Professor Donn Randy Garrison published a book in 2011 titled E-learning in the 21st Century and researched about this point, highlighting the role of instructional technologies, concluding that ???(???) new and emerging communications technologies are radically changing the educational landscape in terms of flexibility and connectivity. They are providing the means to create fully engaged communities of learners independent of time and space. These technological innovations are not exotic or expensive; they are technologies that have permeated most aspects of life in our increasingly connected society???.',
    text13:
      'In this new digital era where technology is not as expensive as before, live learning has introduced several forms to include these resources during class. The advantages of using video in teaching result in a better understanding of a topic for students, especially if the videos are animations or graphics, as well as make the class more dynamic and interactive.',
    text14:
      'For quite some time students, from all over the world and from different ages, have expressed their need for a different form of education, where more resources can be used to explain an idea besides the millennial-form teaching; this allows innovative technologies to take a step forward and assist teachers in their job while expanding education. Live learning is known for using multiple resources in classes that help students comprehend an idea fast and retain information better.',
    text15:
      'Furthermore, e-learning features a wide selection of skills and abilities easily accessible for students all over the world, creating more opportunities for education to reach more people and allowing users to develop expertise through advanced platforms, which is Enki Connect???s prime motto, the up-and-coming e-learning company that is revolutionizing the world of live education.',
    text16:
      'Enki Connect is a new way of learning skills and abilities with the help of verified advisors, connecting people all over the world and providing unique tools to achieve professional growth.',
    text17:
      'Not only does Enki Connect help students and those interested in learning grow and evolve but gives new opportunities to teachers as well. The advanced platform allows professionals to share their skills with the community and get paid to spread their wits with no limit existing, meaning that the possibilities are endless. Features such as video calls and chats are available to make the learning process smoother, leaving no room for excuses, as well as the possibility of choosing your schedule according to your needs, due to the flexible platform.',
    text18:
      'With the largest expertise list available online, Enki Connect can teach over 60 different skills including recreation subjects such as singing, dancing, and music, personal growth topics like relationship advice, self-development, public speaking and spirituality, and complex disciplines that have a huge impact on today???s functioning such as blockchain, financial management, and big data analytics.',
    text19:
      'Immediate resolutions to any issues that might arise are available, providing top-class customer and technical support. Enki Connect pays critical attention to feedback and is always looking for improvement and new additions, therefore the platform is student-based, along with teachers??? opinions and functioning',
    text20:
      'Face to face education remains essential to build and grow students around the world, regarding their age or level, but since the strike of COVID-19 where every school, college, and learning center was forced to close, new forms of education have arisen and have surprisingly, for many people, shown optimal results. According to a joint report by the Boston Consulting Group and Arizona State University released in 2018, the overall post-secondary student enrollment has been seeing a yearly decline of 1% to 2%, while the number of students taking online courses grows 5% annually.',
    text21:
      'This statistic exposes a new paradigm that a few years ago was completely different. Live learning is growing rapidly due to its ability to spread knowledge on many different topics and subjects, at cheaper costs than traditional higher education systems, and at ???personalized times???, in which students can have their schedule or connect to class from anywhere in the world.',
    text22:
      'The most important factor in the world of education is to continue its path by engaging students and reducing the number of drop-outs as much as possible. Platforms that allow e-learning to be accessible for students and teachers, such as Enki Connect, have helped this gap close. Offering quality education, at affordable prices and with the best advisors out there is not a utopia anymore, it???s Enki Connect???s mission and pleasure to deliver.',
  },
  {
    title: 'La Importancia De La Educaci??n Cara A Cara',
    title2: 'Los Estudiantes Aprenden M??s Y Entienden Mejor',
    title3: 'Hace Posible Las Interacciones',
    title4:
      'Introduce Herramientas Innovadoras Que Permiten La Expansi??n De La Educaci??n',
    title5: 'C??mo Enki Connect Contribuye A La Educaci??n Cara A Cara',
    title6: 'Conclusi??n',

    text1:
      'Descubra los beneficios del aprendizaje en vivo que se tornan esenciales en la forma de educaci??n actual.',
    text2:
      'En una era en la cual la tecnolog??a puede controlar casi todos los factores de la vida de una persona, la educaci??n es muchas veces vista como ???amenazada??? y ???cerca de su fin???, aunque esto no puede estar m??s lejos de la verdad. Desde la aparici??n del COVID-19 donde las escuelas, universidades y centros de aprendizaje fueron forzadas a cerrar, nuevas maneras de acceder a la educaci??n fueron perfeccionadas aun cuando estas ya exist??an hace rato. Estas plataformas y herramientas han ayudado a que la educaci??n pueda llegar a m??s estudiantes, y tambi??n ha ayudado a muchas personas a aprender nuevas habilidades, desarrollar t??cnicas profesionales y construir su perfil profesional, lo cual llev?? a m??s oportunidades laborales y opciones de carrera.',
    text3:
      'Aunque la tecnolog??a provee excelentes recursos para aprender, los valores centrales de la educaci??n siguen presentes, a pesar de lo que la gente pueda pensar, tales como clases y debates cara a cara, los cuales son esenciales para desarrollar el pensamiento cr??tico, poder construir una opini??n, y enfrentarse a otras perspectivas, entre otras cosas.',
    text4:
      'Esta publicaci??n tiene como objetivo demostrar y difundir la importancia de la educaci??n cara a cara en la sociedad actual con la ayuda de la tecnolog??a, exponiendo el importante trabajo que los nuevos sistemas y plataformas realizan que permiten que la educaci??n sea accesible para m??s personas, en t??rminos de costos y tiempos, a su vez de c??mo la educaci??n en l??nea ???alias e-learning??? ha impactado positivamente la forma en la que los estudiantes retienen informaci??n. Adem??s, esta publicaci??n se??ala c??mo los maestros pueden tener m??s oportunidades en estos tiempos dif??ciles mediante la participaci??n en plataformas de e-learning para compartir su conocimiento y obtener un salario digno.',
    text5:
      'Para lograr esto, Enki Connect fue creada. Una plataforma avanzada que conecta sin problemas a estudiantes con tutores certificados que poseen m??ltiples habilidades y aptitudes, as?? creando un proceso de aprendizaje ??nico y fruct??fero para desarrollar, crecer y perfeccionar los siguientes profesionales del mundo. Contando con una interfaz flexible con herramientas tales como video llamadas, cat??logo de asesores, un chat y m??s de 60 habilidades ense??adas y creciendo, incluyendo t??picos recreativos y temas actuales que dictan el funcionamiento del mundo, Enki Connect provee una nueva forma de acceder a la educaci??n.',
    text6:
      'Debajo se encuentran tres puntos cr??ticos en los cuales la educaci??n cara a cara se junta con recursos tecnol??gicos actuales, presentando estad??sticas y datos ??tiles que pueden ayudar a los usuarios a entender por qu?? esta forma de educaci??n se convertir?? en el futuro.',
    text7:
      'El aprendizaje virtual, junto con el aprendizaje tradicional cara a cara en un sal??n, juega un rol fundamental en el entendimiento de una materia o t??pico para los estudiantes. La pandemia del COVID-19 result?? en la completa detenci??n y cambio del mundo en cuanto a la forma en la que recibimos educaci??n, tanto en el colegio, la universidad, cursos y dem??s, lo que llev?? a una revoluci??n masiva de la educaci??n v??a internet.',
    text8:
      'La educaci??n esparcida durante este per??odo fue minuciosamente analizada por muchos profesionales para determinar la calidad de la educaci??n y del e-learning y c??mo puede impactar a los estudiantes y su futuro. Contra todo pron??stico, la educaci??n en l??nea mostr?? resultados impresionantes relacionados a la participaci??n estudiantil, realizaci??n de actividades y aprobaci??n del curso. Uno de los beneficios de la ense??anza en l??nea es la posibilidad que tienen los estudiantes de obtener respuestas en el momento en que las necesitan, ayud??ndolos a entender mejor un tema y reducir las posibilidades de reprobar una clase o perder su motivaci??n (lo cual se sabe desde hace mucho tiempo que puede respaldar el abandono de la educaci??n, con la ayuda de otros factores cr??ticos)',
    text9:
      'Los beneficios de la educaci??n en l??nea van m??s all?? de quedarse en casa y manejar un horario deseado, sino que ha probado ser una forma de aprendizaje s??lida y flexible que puede mejorar los resultados de los estudiantes y el trabajo de los docentes en el campo.',
    text10:
      'Una parte cr??tica del camino de un alumno en la escuela, que luego contin??a en una universidad u otra forma de educaci??n superior, es la interacci??n con compa??eros y el poder construir relaciones duraderas. Si se habla de alg??n beneficio de las clases en l??nea se puede mencionar la gran ayuda que ha sido para los alumnos t??midos a participar m??s en clase, gracias a que se encuentran en un espacio c??modo en el sitio que elijan.',
    text11:
      'Esto demuestra que no solo es importante participar con pares y contribuir a un debate sobre un tema espec??fico, sino que tambi??n comprender que hay otras maneras de llegar al mismo resultado; las interacciones cara a cara, ya sean en l??nea o en un sal??n f??sico, mantienen la educaci??n posible y promueven a que los estudiantes piensen m??s all?? de su perspectiva, dado que tienen la oportunidad de debatir sus opiniones y llegar a nuevos puntos de vista que tal vez no podr??an haber pensado de forma individual.',
    text12:
      'Furthermore, e-learning can replicate the aspects of a physical classroom and the interactions that can result there, with students participating comfortably in the space of their choice, which leads to better understanding and proactive participation. Professor Donn Randy Garrison published a book in 2011 titled E-learning in the 21st Century and researched about this point, highlighting the role of instructional technologies, concluding that ???(???) new and emerging communications technologies are radically changing the educational landscape in terms of flexibility and connectivity. They are providing the means to create fully engaged communities of learners independent of time and space. These technological innovations are not exotic or expensive; they are technologies that have permeated most aspects of life in our increasingly connected society???.',
    text13:
      'Adem??s, la educaci??n en l??nea puede replicar los aspectos de un aula f??sica y las interacciones que pueden surgir all??, con estudiantes participando c??modamente en el espacio que elijan, lo que lleva a un mejor entendimiento y participaci??n proactiva. El profesor Donn Randy Garrison public?? un libro en 2011 titulado E-learning en el siglo 21 e investig?? acerca de este punto, resaltando el rol de las tecnolog??as de instrucci??n, concluyendo que ???(???) nuevas y emergentes tecnolog??as de comunicaci??n est??n radicalmente cambiando el paisaje educacional en t??rminos de flexibilidad y conectividad. Est??n brindando los medios para crear una comunidad de aprendices puramente comprometida independientemente del tiempo y el espacio. Estas innovaciones tecnol??gicas no son ex??ticas ni costosas; son tecnolog??as que han impregnado la mayor??a de los aspectos de la vida en nuestra sociedad cada vez m??s conectada.',
    text14:
      'En esta nueva era digital donde la tecnolog??a no es tan costosa como en el pasado, la educaci??n en vivo ha introducido varias maneras de incluir estos recursos en clase. Las ventajas de usar videos en la ense??anza resulta en un mejor entendimiento de un tema para los estudiantes, especialmente si dichos videos son animaciones o gr??ficos, a su vez de hacer la clase m??s din??mica e interactiva.',
    text15:
      'Desde hace un tiempo, estudiantes de todas partes del mundo y de todas las edades han expresado su necesidad de obtener una forma de educaci??n diferente, donde m??s recursos pueden ser usados para explicar una idea adem??s de la milenaria forma de ense??anza ya conocida; esto permite que las tecnolog??as innovadoras den un paso al frente y asistan a los maestros en su tarea mientras se expande la educaci??n. La educaci??n en vivo es conocida por utilizar m??ltiples recursos en clase que ayudan a los estudiantes a comprender una idea r??pidamente y retener informaci??n de una mejor manera.',
    text16:
      'Adem??s, la educaci??n en l??nea posee una amplia selecci??n de habilidades y t??cnicas que son de f??cil acceso para los estudiantes alrededor del mundo, creando m??s oportunidades para que la educaci??n llegue a m??s personas y permitiendo que los usuarios desarrollen habilidades a trav??s de plataformas avanzadas, lo cual es el lema principal de Enki Connect, la prometedora compa????a de educaci??n en l??nea que est?? revolucionando el mundo de la educaci??n en vivo.',
    text17:
      'Enki Connect es una nueva forma de aprender habilidades y t??cnicas con la ayuda de tutores certificados, conectando personas alrededor del mundo y proporcionando herramientas ??nicas para lograr el crecimiento personal.',
    text18:
      'No solo Enki Connect ayuda a los estudiantes, y aquellos interesados en aprender, a crecer y evolucionar sino que a su vez otorga nuevas oportunidades para los maestros. La avanzada plataforma permite a los profesionales compartir sus habilidades con la comunidad y obtener una remuneraci??n por esparcir sus conocimientos sin l??mite existente, lo que significa que las posibilidades son infinitas. Cuenta con caracter??sticas tales como video llamadas y chats para hacer el proceso de aprendizaje m??s simple, dejando ning??n espacio para excusas, a su vez de la posibilidad de escoger un horario propio acorde a las necesidades de cada uno, debido a la flexibilidad de la plataforma.',
    text19:
      'Con la lista de expertos m??s grande disponible en l??nea, Enki Connect ense??a m??s de 60 habilidades diferentes, incluyendo materias recreativas tales como el canto, la danza y la m??sica, t??picos de crecimiento personal como asesoramiento sobre relaciones, desarrollo personal, hablar en p??blico y espiritualidad, y disciplinas complejas que tienen un impacto gigante en el funcionamiento de nuestros d??as como el blockchain, gesti??n financiera y el an??lisis de big data.',
    text20:
      'Soluciones inmediatas a cualquier problema que pueda surgir est??n disponibles, otorgando una atenci??n al cliente y t??cnica superior. Enki Connect presta una atenci??n cr??tica a las respuestas de los usuarios y siempre est?? buscando formas de mejorar y agregar nuevas funciones, por lo tanto, la plataforma se basa en los estudiantes, junto con las opiniones y el rendimiento de los profesores.',
    text21:
      'La educaci??n cara a cara sigue siendo esencial para construir y crecer estudiantes alrededor del mundo, con respecto a su edad o nivel, pero desde la aparici??n del COVID-19 donde cada escuela, universidad y centro de aprendizaje se vio forzado a cerrar, nuevas formas de educaci??n han aparecido y sorprendentemente, para muchas personas, han mostrado resultados ??ptimos. Seg??n un reporte conjunto entre el Grupo de Consultas de Boston y la Universidad del Estado de Arizona publicado en 2018, la inscripci??n general de estudiantes graduados de la educaci??n secundaria ha experimentado una disminuci??n anual del 1% al 2%, mientras que el n??mero de estudiantes que toman cursos en l??nea crece un 5% anual.',
    text22:
      'Esta estad??stica expone un nuevo paradigma que hace algunos a??os era completamente diferente. La educaci??n en l??nea est?? creciendo r??pidamente debido a su habilidad para esparcir conocimiento en muchos temas y materias diferentes, a costos m??s econ??micos en comparaci??n al sistema de educaci??n tradicional, y en ???tiempos personalizados???, en donde los estudiantes pueden controlar su propio horario o conectarse a clase desde cualquier parte del mundo.',
    text23:
      'El factor m??s importante en el mundo de la educaci??n es continuar su camino atrayendo estudiantes y reduciendo el n??mero de estudiantes que abandonan dicha tarea. Plataformas que permiten que la educaci??n en l??nea sea accesible para estudiantes y maestros, como lo hace Enki Connect, han ayudado a cerrar esta brecha. Ofrecer una educaci??n de calidad, a precios econ??micos y con los mejores tutores disponibles ya no es una utop??a, es la misi??n y el placer de ofrecer por parte de Enki Connect.',
  },
  {
    title: 'Challenges of E-learning During Covid-19',
    title2: 'Work process organization and time management',
    title3: 'Gadgets in short supply, and crashing systems',
    title4: 'Connectivity',
    title5: 'Computer literacy',
    title6: 'Data privacy',
    title7: 'Isolation',
    title8: 'Lack of Interaction',
    title9: 'Security',
    title10: 'Imperfections in the LMS',
    title11: 'Conclusion?',

    text1:
      'Due to the sheer spread of COVID-19, millions of students and teachers had to shift their communication online. Schools were closed until further notice, and we had to adjust to a new way of life. During the lockdown, teachers and administrators worked hard to keep students on track, transitioning to online learning as soon as possible.',
    text2:
      'Although technological advancements have made many previously unthinkable things possible, the transition to e-learning has not gone as smoothly as we would have liked. This blog will look at some of the most significant challenges of eLearning encountered during the Covid-19 pandemic.',
    text3:
      'The mentors were expected to move their classes online immediately, with no additional training or budget. Regrettably, many institutes were unprepared to move classes online.',
    text4:
      'The burden was placed on mentors in this situation to adapt themselves and their students to a new way of learning. As a result, mentors would spend an excessive amount of time online and struggled greatly to keep up with the additional workload of online education.',
    text5:
      'Not every student or teacher possessed a personal device for online learning. To stay on track, many of them were supposed to share laptops and computers with their parents, sisters/brothers. Another E learning challenge that everyone had encountered was a computer crash, which usually occurred at the most inopportune time.',
    text6:
      'Because of the widespread use of online learning systems, video streaming software, and other digital tools, millions of people around the world experienced technical difficulties. The platforms became overburdened, resulting in poor video and audio quality and internet issues. The internet connection was either not stable or the current data plan was insufficient to meet the progressive e-learning requirements. Students in both urban and rural areas were significantly affected by the ???homework gap??? which mentors struggled endlessly to fill.',
    text7:
      'Without additional training, it was difficult for teachers, students, and parents to begin using a learning management system or any other digital tool. They may be overwhelmed by the amount of data they must deal with as they attempt to go digital, as well as frustrated by the unknown. One of the most common eLearning challenges was technical glitches caused by a lack of knowledge about computer devices.',
    text8:
      'During the pandemic, this was another major challenge for eLearning. A key concern that few were aware of was a lack of data privacy. Teachers and students have been connected using multiple digital tools since the beginning of the school shutdown, with little regard for the amount and nature of personal data collected. To achieve our main goal of a quick transition to online learning, we had to sacrifice our privacy, especially when large e-learning software suppliers offered temporary free subscription plans.',
    text9:
      'This rather psychological factor continues to have a significant impact on student???s motivation and learning progress, and is another significant eLearning challenge. Students became accustomed to instant eye-to-eye communication with one another in the classroom, allowing them to react together, share experiences, joke, and make nonverbal contact, thereby strengthening social skills. A classroom had been a kind of sanctuary for many students, which was then taken away. It???s not surprising that the majority of them felt isolated and scared as a result of the pandemic, their parents??? job loss, and their friends??? disconnection.',
    text10:
      'It became difficult to keep students engaged during online lectures in the absence of a teacher???s physical presence and face-to-face contact. Furthermore, a major concern was linked to science labs (physics, chemistry, etc.). It was impossible to put into practice without in-person instruction and courses that relied heavily on hands-on experience (i.e. nursing, art classes). This e-learning challenge undoubtedly had an impact on students??? social development.',
    text11:
      'The covid-19 outbreak, like any other crisis, provided fertile ground for cybercriminals, resulting in a wave of cyber-attacks. Students??? and mentors??? data was vulnerable and at risk of being breached and misused. This was one of the most common E-learning challenges, and it had a significant negative impact on E-learners??? overall well-being during the pandemic.',
    text12:
      'One of the industry???s foundational issues and challenges of eLearning was a lack of understanding of the psychology of teaching and learning, as well as a lack of understanding of how teachers and students work during LMS development. During the lockdown, amidst the period of uncertainty, this eLearning challenge proved to be quite tiresome. ',
    text13:
      'The Covid-19 pandemic has pushed us to test our potentials. It led us to discover options and opportunities which were not very well known in the pre-pandemic world. E-Learning became one of the most necessary means of education and awareness amidst this global pandemic. Even though there is still a lot of grey area regarding the technicalities and challenges of eLearning, the Covid-19 pandemic has allowed us to fill in the gaps. It is now one of the best mediums of education available and faces a good possibility of continuous growth even after the pandemic dies down.',
  },
  {
    title: 'Advantages of E-Learning Platform in Education',
    title2: 'Cost',
    title3: 'Sensory Interaction',
    title4: 'Customization',
    title5: 'Course Revision',
    title6: 'Satisfaction among Learners',
    title7: 'Collaboration and Team Building',
    title8: 'Standardization',
    title9: 'Conclusions?',

    text1:
      'E-Learning is frequently misunderstood as simply online training. While technically correct, the scope of E-Learning includes far more than a paper manual or a PowerPoint presentation delivered in a classroom converted to searchable online modules.',
    text2:
      'Understanding the true scope of E-Learning necessitates a more in-depth examination of how it operates and how this translates to smarter, savvier, and more productive learners. It is about broadening your social circle by making deeper, more meaningful connections. Participants feel connected to the facilitator, which fosters relational trust.',
    text3:
      'E-Learning in education has evolved enormously into a benchmark for learning a diverse variety of skills. This blog will look at some advantages of E-Learning to dissect why E-learning is becoming the new norm in this day and age. Continue reading to learn more!',
    text4:
      'When compared to traditional training methods, one of the most obvious advantages of E-Learning is cost savings. In-person training is costly: factor in the cost of an instructor, travel time, time away from work, and even the cost of physical training materials such as workbooks, and it???s quite simple to see how E-Learning is more cost-effective.',
    text5:
      'There is no cost to reproduce materials with E-Learning, and learners can participate using their technology thanks to mobile learning and microlearning. Furthermore, because the classroom is virtual, you save money on travel expenses, and instructors can record and distribute their sessions at any time.',
    text6:
      'It???s a well-known fact that the more senses that are engaged while learning, the better the later recall. Sensory learning improves what could otherwise be a mediocre experience when E-Learning in education engages a learner???s eyes, ears, and hands during a course. Furthermore, simulations and mastery checks provide users with another opportunity to truly experience the training in a safe environment before applying new skills on the job.',
    text7:
      'Learning is not a one-size-fits-all experience, just as learners are not one-size-fits-all. E-Learning allows learners to discover, read, watch, and interact at their own pace by utilizing various delivery methods to provide a unique and individual experience for each learner. This type of customized E-Learning fosters a more conducive educational environment for learning and retention.',
    text8:
      'In a traditional classroom setting, a student may be less likely to raise their hand and risk failure; similarly, in the workplace, learners may be hesitant to try out a new skill for fear of getting it wrong. Another advantage of E-Learning is, it allows learners to explore, test, and, yes, even fail as part of the learning process???there is no judgment here. Continuous, in-the-moment feedback allows learners to course-correct and gain proficiency in the safest way possible, keeping the learning path moving forward in a positive direction.',
    text9:
      'If you want students to remember what they???ve learned, you should aim for high satisfaction rates. Disengagement results from negative attitudes toward learning. Using E-Learning appeals to learners??? hearts and minds by illustrating the ???why??? behind the learning. And when you provide learners with the opportunity to see the fruits of their labor through metrics, leaderboards, and certification increases learner satisfaction and promotes a better attitude???the learning sticks.',
    text10:
      'Getting a quiet class to talk can be an instructor???s worst nightmare, especially when there are more crickets than input. If there???s anything that telecommuting and virtual workspaces have taught us, it???s that it is possible to collaborate and communicate without being in the same classroom. E-Learning allows learners from different fields to create connections outside of the workplace, thanks to forums, social networks, and a flipped classroom model. What was the result? Learners who are willing to speak up, as well as stronger, more naturally collaborative teams.',
    text11:
      'When working in a global workplace, it can be difficult to assess learners??? training experiences, which are influenced by different instructors, personalities, and material availability, all of which can vary greatly from location to location. You can standardize the experience by delivering the exact media with E-Learning, giving you more control over the learning environment. E-Learning transforms almost any space and time into an opportunity for development by utilizing tools that users already have in their pockets. The numerous benefits of E-Learning can be argued in a variety of ways, but the main benefit can be boiled down to one component: retention. Learners who are engaged, excited about the course material, and who want to experience the concepts through games, quizzes, discussions, and other activities retain information more effectively.',
    text12:
      'E-learning is becoming more and more common as we move towards a completely digitalized age. But like everything else, E-learning also comes with its own set of obstacles. Ultimately those obstacles enable the learners as well as the facilitators to show compassion to each other as they strive to build connections on this medium. Enkiconnect is a unique and one of the best E-Learning platforms where you can meet people with diverse talents and skills and create meaningful connections. It is a nontraditional learning medium that enables individuals to gain and share knowledge in all aspects of life. To know in detail about Enkiconnect and what it has to offer, check out their website today!',
  },
  {
    title: 'How do I find an online mentor?',
    title2: 'Why do you need to find an online mentor?    ',
    title3: 'How to find the best online mentor?',
    title4: 'Why do you need to find an online mentor?    ',
    title5: 'Understand why you want to find your mentor online    ',
    title6: 'Reach out to your existing network     ',
    title7: 'Don???t restrict yourself.     ',
    title8: 'Join an online mentor program ',
    title9: 'Why choose Enki Connect?    ',
    title10: 'Set up a meeting     ',
    title11: 'Clear your expectations     ',
    title12: 'Be appreciative and follow-up your mentor???s advice     ',
    title12: 'Final Remarks:    ',

    text1:
      'Whether you are a veteran in the industry or just about to start your career, you always have the pace for development. The direction you take will depend on the support system and motivation. Your reasons for choosing a certain career path usually exist before applying for that field. ',
    text2:
      'Understanding the true scope of E-Learning necessitates a more in-depth examination of how it operates and how this translates to smarter, savvier, and more productive learners. It is about broadening your social circle by making deeper, more meaningful connections. Participants feel connected to the facilitator, which fosters relational trust.',
    text3:
      'E-Learning in education has evolved enormously into a benchmark for learning a diverse variety of skills. This blog will look at some advantages of E-Learning to dissect why E-learning is becoming the new norm in this day and age. Continue reading to learn more!',
    text4:
      'When compared to traditional training methods, one of the most obvious advantages of E-Learning is cost savings. In-person training is costly: factor in the cost of an instructor, travel time, time away from work, and even the cost of physical training materials such as workbooks, and it???s quite simple to see how E-Learning is more cost-effective.',
    text5:
      'There is no cost to reproduce materials with E-Learning, and learners can participate using their technology thanks to mobile learning and microlearning. Furthermore, because the classroom is virtual, you save money on travel expenses, and instructors can record and distribute their sessions at any time.',
    text6:
      'It???s a well-known fact that the more senses that are engaged while learning, the better the later recall. Sensory learning improves what could otherwise be a mediocre experience when E-Learning in education engages a learner???s eyes, ears, and hands during a course. Furthermore, simulations and mastery checks provide users with another opportunity to truly experience the training in a safe environment before applying new skills on the job.',
    text7:
      'Learning is not a one-size-fits-all experience, just as learners are not one-size-fits-all. E-Learning allows learners to discover, read, watch, and interact at their own pace by utilizing various delivery methods to provide a unique and individual experience for each learner. This type of customized E-Learning fosters a more conducive educational environment for learning and retention.',
    text8:
      'In a traditional classroom setting, a student may be less likely to raise their hand and risk failure; similarly, in the workplace, learners may be hesitant to try out a new skill for fear of getting it wrong. Another advantage of E-Learning is, it allows learners to explore, test, and, yes, even fail as part of the learning process???there is no judgment here. Continuous, in-the-moment feedback allows learners to course-correct and gain proficiency in the safest way possible, keeping the learning path moving forward in a positive direction.',
    text9:
      'If you want students to remember what they???ve learned, you should aim for high satisfaction rates. Disengagement results from negative attitudes toward learning. Using E-Learning appeals to learners??? hearts and minds by illustrating the ???why??? behind the learning. And when you provide learners with the opportunity to see the fruits of their labor through metrics, leaderboards, and certification increases learner satisfaction and promotes a better attitude???the learning sticks.',
    text10:
      'Getting a quiet class to talk can be an instructor???s worst nightmare, especially when there are more crickets than input. If there???s anything that telecommuting and virtual workspaces have taught us, it???s that it is possible to collaborate and communicate without being in the same classroom. E-Learning allows learners from different fields to create connections outside of the workplace, thanks to forums, social networks, and a flipped classroom model. What was the result? Learners who are willing to speak up, as well as stronger, more naturally collaborative teams.',
    text11:
      'When working in a global workplace, it can be difficult to assess learners??? training experiences, which are influenced by different instructors, personalities, and material availability, all of which can vary greatly from location to location. You can standardize the experience by delivering the exact media with E-Learning, giving you more control over the learning environment. E-Learning transforms almost any space and time into an opportunity for development by utilizing tools that users already have in their pockets. The numerous benefits of E-Learning can be argued in a variety of ways, but the main benefit can be boiled down to one component: retention. Learners who are engaged, excited about the course material, and who want to experience the concepts through games, quizzes, discussions, and other activities retain information more effectively.',
    text12:
      'E-learning is becoming more and more common as we move towards a completely digitalized age. But like everything else, E-learning also comes with its own set of obstacles. Ultimately those obstacles enable the learners as well as the facilitators to show compassion to each other as they strive to build connections on this medium. Enkiconnect is a unique and one of the best E-Learning platforms where you can meet people with diverse talents and skills and create meaningful connections. It is a nontraditional learning medium that enables individuals to gain and share knowledge in all aspects of life. To know in detail about Enkiconnect and what it has to offer, check out their website today!',
  },
  {
    title: 'How To Earn Money by Sharing Your Knowledge with Enki Connect',
  },
  {
    title: 'How to become a freelance advisor in 2022',
  },
  {
    title: 'We got hacked on Meta, did you?',
  },
];

const BlogOne = (props) => {
  const id = props.location.state.id.toString();
  console.log(props);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!blog[id]) {
    props.history.push({ pathname: `/Blog` });
    return null;
  }

  return (
    <>
      <div className="componentFirst">
        <div className="componentSecond">
          <div className="blogOneContainer">
            <div className="termsTitle">{blog[id].title}</div>
            {id === '0' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image8} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneTitle">{blog[id].title1}</div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text8}</div>

                <div className="blogOneList">
                  <div className="blogOneText">1. Learning</div>
                  <div className="blogOneText">2. Teaching</div>
                  <div className="blogOneText">3. Earning</div>
                  <div className="blogOneText">4. Sharing</div>
                  <div className="blogOneText">5. Exploring</div>
                  <div className="blogOneText">5. Exploring</div>
                </div>

                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text11}</div>

                <div className="blogOneList">
                  <div className="blogOneText">1. Communication</div>
                  <div className="blogOneText">2. Respect</div>
                  <div className="blogOneText">3. Integrity</div>
                  <div className="blogOneText">4. Innovation</div>
                  <div className="blogOneText">5. Passion</div>
                  <div className="blogOneText">6. Empathy</div>
                  <div className="blogOneText">7. Understanding</div>
                </div>

                <div className="blogOneTitle">{blog[id].title6}</div>
                <div className="blogOneText">{blog[id].text12}</div>
                <div className="blogOneList">
                  <div className="blogOneText">{blog[id].subTitle1}</div>
                  <div className="blogOneText">{blog[id].text13}</div>
                  <div className="blogOneText">{blog[id].subTitle2}</div>
                  <div className="blogOneText">{blog[id].text14}</div>
                  <div className="blogOneText">{blog[id].subTitle3}</div>
                  <div className="blogOneText">{blog[id].text15}</div>
                  <div className="blogOneText">{blog[id].subTitle4}</div>
                  <div className="blogOneText">{blog[id].text16}</div>
                  <div className="blogOneText">{blog[id].subTitle5}</div>
                  <div className="blogOneText">{blog[id].text17}</div>
                  <div className="blogOneText">{blog[id].subTitle6}</div>
                  <div className="blogOneText">{blog[id].text18}</div>
                </div>
                <div className="blogOneText">{blog[id].title7}</div>
                <div className="blogOneText">{blog[id].text19}</div>
                <div className="blogOneText">{blog[id].text20}</div>
              </>
            )}

            {id === '1' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image9} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text12}</div>
                <div className="blogOneText">{blog[id].text13}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text14}</div>
                <div className="blogOneText">{blog[id].text15}</div>
                <div className="blogOneText">{blog[id].text16}</div>
              </>
            )}

            {id === '2' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image12} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneText">{blog[id].text12}</div>
                <div className="blogOneText">{blog[id].text13}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text14}</div>
                <div className="blogOneText">{blog[id].text15}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text16}</div>
                <div className="blogOneText">{blog[id].text17}</div>
                <div className="blogOneText">{blog[id].text18}</div>
              </>
            )}

            {id === '3' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image13} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneText">{blog[id].text12}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text13}</div>
                <div className="blogOneText">{blog[id].text14}</div>
                <div className="blogOneText">{blog[id].text15}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text16}</div>
                <div className="blogOneText">{blog[id].text17}</div>
                <div className="blogOneText">{blog[id].text18}</div>
                <div className="blogOneText">{blog[id].text19}</div>
                <div className="blogOneTitle">{blog[id].title6}</div>
                <div className="blogOneText">{blog[id].text20}</div>
                <div className="blogOneText">{blog[id].text21}</div>
                <div className="blogOneText">{blog[id].text22}</div>
              </>
            )}

            {id === '4' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image14} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneText">{blog[id].text13}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text14}</div>
                <div className="blogOneText">{blog[id].text15}</div>
                <div className="blogOneText">{blog[id].text16}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text17}</div>
                <div className="blogOneText">{blog[id].text18}</div>
                <div className="blogOneText">{blog[id].text19}</div>
                <div className="blogOneText">{blog[id].text20}</div>
                <div className="blogOneTitle">{blog[id].title6}</div>
                <div className="blogOneText">{blog[id].text21}</div>
                <div className="blogOneText">{blog[id].text22}</div>
                <div className="blogOneText">{blog[id].text23}</div>
              </>
            )}

            {id === '5' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image15} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text3}</div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneTitle">{blog[id].title6}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneTitle">{blog[id].title7}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title8}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneTitle">{blog[id].title9}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneTitle">{blog[id].title10}</div>
                <div className="blogOneText">{blog[id].text12}</div>
                <div className="blogOneTitle">{blog[id].title11}</div>
                <div className="blogOneText">{blog[id].text13}</div>
              </>
            )}

            {id === '6' && (
              <>
                <div className="blogOne">
                  <div className="blogOneLeft">
                    <div className="blogOneText">{blog[id].text1}</div>
                    <div className="blogOneText">{blog[id].text2}</div>
                    <div className="blogOneText">{blog[id].text3}</div>
                  </div>
                  <div className="blogOneRight">
                    <img src={image16} alt="" className="blogOneImage" />
                  </div>
                </div>
                <div className="blogOneTitle">{blog[id].title2}</div>
                <div className="blogOneText">{blog[id].text4}</div>
                <div className="blogOneText">{blog[id].text5}</div>
                <div className="blogOneTitle">{blog[id].title3}</div>
                <div className="blogOneText">{blog[id].text6}</div>
                <div className="blogOneTitle">{blog[id].title4}</div>
                <div className="blogOneText">{blog[id].text7}</div>
                <div className="blogOneTitle">{blog[id].title5}</div>
                <div className="blogOneText">{blog[id].text8}</div>
                <div className="blogOneTitle">{blog[id].title6}</div>
                <div className="blogOneText">{blog[id].text9}</div>
                <div className="blogOneTitle">{blog[id].title7}</div>
                <div className="blogOneText">{blog[id].text10}</div>
                <div className="blogOneTitle">{blog[id].title8}</div>
                <div className="blogOneText">{blog[id].text11}</div>
                <div className="blogOneTitle">{blog[id].title9}</div>
                <div className="blogOneText">{blog[id].text12}</div>
              </>
            )}
            {id === '7' && <BlogSeven />}
            {id === '8' && <BlogEight />}
            {id === '9' && <BlogNine />}
            {id === '10' && <BlogTen />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogOne;
