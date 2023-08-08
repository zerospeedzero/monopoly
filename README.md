Modern E-Learning Platform for Monopoly Game Skill Transfer
===========================================================

Overview:
---------

The primary objective of our project is to develop an advanced e-learning platform tailored to young professionals, our predominant target demographic. This platform aims to impart comprehensive skill transfer in the domain of the Monopoly game. Our solution is centered around delivering the following core values:

*   Engagement Generation: Create an intrinsic allure among the target audience for Monopoly games.
*   Foundational Proficiency: Deliver foundational expertise, enabling beginners to initiate gameplay confidently with peers and family.
*   Strategic Mastery: Present advanced modules designed to educate users on tactical nuances, enhancing their probability of success.
*   Variation Awareness: Provide an expansive repository of knowledge about diverse iterations of Monopoly games.
*   Progress Monitoring: I implemented a systematic progression monitoring mechanism to track student learning journeys.
*   Game practice: I made use of OpenSource project to develop an online version of the classic Monopoly game that users can play against a computer opponent, which uses smart decision-making strategies.
*   Generative Pre-training Transformer (GPT): I took information from our website and past documents and uses them to create a embedding with Langchain and OpenAI that can have conversations with our users.

Role:
-----

As the sole IT solution architect and implementer, I undertake the strategic design and execution of this web-based e-learning solution. Additionally, I hold the responsibility for the User Interface (UI) and User Experience (UX) design. My role encompasses seamless integration with external systems to facilitate optimal service delivery to our users.

Technology and Functionality:
-----------------------------

1.  **Next JS:** The project harnesses the power of the Next JS framework, serving as the foundation for the e-learning platform's structure.
2.  **Motion Framer:** The integration of Motion Framer infuses the platform with dynamic web-based animations, amplifying the overall user experience during training sessions.
3.  **YouTube API:** To enhance the learning experience, the platform leverages the YouTube API. This allows us to exert control over video playback, facilitating topic-specific navigation within video training modules. Moreover, the API enables tracking of video completion, crucial for module progression.
4.  **Slides.com:** Our training materials, designed on slides.com, are seamlessly incorporated into the e-learning solution. Tailored embedding techniques ensure a harmonious convergence of content creation and website development, optimizing project efficiency.
5.  **Quizzes:** In-depth quizzes accompany each training module. Users advancement hinges on successful quiz completion, thereby ensuring a comprehensive understanding before progressing.
6.  **AI-Powered Monopoly Practice:** An AI-driven Monopoly practice game, built upon an open-source foundation, assesses user skills. Modifications to the AI's decision tree enhance its decision-making capabilities, such as recalibrating the "GO" slot rule to retain a minimum of $100.
7.  **Knowledge Consolidation with Generative Pre-training Transformer (GPT) Integration:**
    *   Training materials, along with client brief and module content, are synthesized into a unified document for embedding.
    *   Through LangChain and OpenAI text-embedding-ada-002 embedding model (Not GhatGPT), this data is segmented into 1000 tokens (with 200 tokens overlap), subsequently stored in vectorstores within Supabase.com. This establishment acts as a repository for long-term memory and internal semantic search, enabling efficient querying on our website with natural language understanding response. After successfully clearing quizzes, users access this GPT capabilities.
    *   It serves as a private knowledge base, addressing project-specific queries, which conventional large language models lack expertise in handling, such as identifying project graphic designers. I think using large language model and implementation of private knowledge databases would be the trend of IT industry for coming years.

Project Team Roles
==================

**Project Leader (George Cheng)**

Responsible for deliverables planning and updating, process control, and project management.

**Graphic Design (Yan Lok Yuen)**

Responsible for colour, typographic, graphic, 3D and VR design.

**Programming (George Cheng)**

Responsible for website building, solution architecture, technologies deployed and technical support.

**Content Writer (Ryan Ngo)**

Responsible for content writing for the beginner module.

**Content Writer (Danny Ha)**

Responsible for content writing for the tactics module.

**Content Writer (Jake Morin)**

Responsible for content writing for the various versions of the Monopoly module.

**Writer and Visual Assistant (Jimmy Chan)**

Responsible for the introduction and history of Monopoly writing and assisting other teammates with visual creation. Also, he is responsible for all 3D model creation.

Resources
=========

The website has employed technologies provided by Microsoft Azure Cloud, YouTube API, Slides.com embedding, LangChain, OpenAI, Vectorstores and NextJS framework.

**Website link:** [https://sait-monopoly.azurewebsites.net/](https://sait-monopoly.azurewebsites.net/)