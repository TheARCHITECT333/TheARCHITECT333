\documentclass[10pt]{resume} % Use the custom resume.cls style

\usepackage[left=0.45in,top=0.4in,right=0.45in,bottom=0.4in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref} 
\usepackage{fontawesome5} % Added for modern icons
\usepackage{xcolor} % Added for custom coloring

% Clean up hyperlinks (removes default ugly colored boxes, makes text clickable)
\hypersetup{
    colorlinks=true,
    urlcolor=black % Keeps links professional and dark
}

\setlist[itemize]{topsep=3pt,partopsep=0pt,parsep=0pt,itemsep=3pt,leftmargin=1.2em}
\setlength{\parskip}{2pt}

\begin{document} % Removed the duplicate \begin{document} that was further down

% ==============================================================================
% MODERN HEADER DESIGN
% ==============================================================================
\begin{center}
    \vspace*{-20pt}
    {\Huge \textbf{Subhajeet Kar}} \\[6pt] % Large, bold name with slight padding below
    
    \small % Slightly smaller text for the contact info
    \faMapMarker* \ Odisha, IN \quad|\quad
    \faPhone \ +91 8249894902 \quad|\quad
    \href{mailto:subhajeetkar333@gmail.com}{\faEnvelope \ subhajeetkar333@gmail.com} \\[4pt]
    
    \href{https://www.linkedin.com/in/subhajeetkar333/}{\faLinkedin \ LinkedIn} \quad|\quad
    \href{https://github.com/TheARCHITECT333}{\faGithub \ GitHub} \quad|\quad
    \href{https://your-portfolio.com}{\faGlobe \ Portfolio}
\end{center}
\vspace{-10pt} % Pulls the first section up slightly to save vertical space


%----------------------------------------------------------------------------------------
%   EDUCATION SECTION
%----------------------------------------------------------------------------------------

\begin{rSection}{Education}

\textbf{National Institute of Technology, Jamshedpur}\\
\textit{B.Tech in Electrical Engineering}  \hfill 2025

\end{rSection}

%----------------------------------------------------------------------------------------
%   WORK EXPERIENCE SECTION
%----------------------------------------------------------------------------------------
\begin{rSection}{EXPERIENCE} 

    \textbf{Ituring.ai} – \textit{Software Engineer} \hfill Aug 2025 – Present
    \begin{itemize}
        \item Architected a \textbf{multi-threaded} Producer–Consumer ingestion pipeline scaling async batch scoring to \textbf{40M+ row datasets}; cut peak JVM heap by \textbf{99\%} (unbounded to 250MB) via bounded \texttt{ArrayBlockingQueue} micro-batching, eliminating recurring \textbf{OutOfMemoryError} crashes.
        \item Prevented \textbf{MySQL} connection-pool exhaustion by decoupling file parsing from DB I/O, reducing active writer threads by 99.8\% and achieving \textbf{sub-4s processing} for 6,000-record batches.
        \item Cut API auth routing latency by \textbf{99\%} by replacing a blocking $O(N)$ token scan with an \textbf{$O(1)$ HashMap lookup}, with \textbf{zero-downtime} credential rotation.
    \end{itemize}

    \vspace{4pt} % <--- Added space to separate jobs

    \textbf{Amazon (AWS)} – \textit{Software Development Engineer Intern} \hfill Jan 2025 – June 2025
    \begin{itemize}
        \item Migrated services to a modular Graphlet architecture, cutting \textbf{GraphQL} load and improving \textbf{backend scalability}.
        \item Upgraded authentication systems using \textbf{Java}, \textbf{AWS Lambda}, and \textbf{Dagger}, strengthening access control and deployment flexibility.
        \item Built and optimized backend features for an enterprise inventory platform, improving team collaboration and handling \textbf{150+ daily active users}.
    \end{itemize}
    
\end{rSection}

%----------------------------------------------------------------------------------------
%   PROJECTS SECTION
%----------------------------------------------------------------------------------------

\begin{rSection}{PROJECTS}
    \textbf{Occasio} \hfill \href{https://github.com/TheARCHITECT333/evently}{\textit{View code}} | \href{https://events-zeta-two.vercel.app/}{\textit{View project}}
    \begin{itemize}
        \item Developed an Eventbrite/Meetup-like web app with authentication, event management, search, and checkout, boosting user engagement by \textbf{25\%}.
        \item Followed clean coding practices and ensured API performance with \textbf{async handlers} and \textbf{MongoDB indexing}.
        \item \textbf{Tech Stack:} Next.js 14, Tailwind CSS, Shadcn, Zod, Mongoose, Clerk, Stripe.
    \end{itemize}
    
    \vspace{4pt} % <--- Added space to separate projects

    \textbf{Z-Run} \hfill \href{https://github.com/TheARCHITECT333/z-run}{\textit{View code}} | \href{https://z-run.vercel.app/}{\textit{View project}}
    \begin{itemize}
        \item Built a location-based survival web game that snaps player movement to real streets via \textbf{GPS}, using \textbf{OpenStreetMap} road geometry for line-of-sight and occlusion.
        \item Implemented \textbf{real-time map tracking}, proximity-based win conditions, and multiple pursuer behaviors with a custom \textbf{pathfinding} and state-management loop.
        \item \textbf{Tech Stack:} Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Leaflet, Overpass API.
    \end{itemize}
\end{rSection} 

%----------------------------------------------------------------------------------------
%   TECHNICAL SKILLS
%----------------------------------------------------------------------------------------

\begin{rSection}{TECHNICAL SKILLS}
    \begin{itemize}
        \item \textbf{Languages \& Frameworks:} Java, C/C++, Python, JavaScript, TypeScript, React.js, Next.js, Node.js
        \item \textbf{Tools \& Platforms:} MySQL, PostgreSQL, REST \& GraphQL APIs, Docker, Nginx, AWS (Lambda, CloudWatch), Git/GitHub, MinIO, JWT Auth, Multithreading
    \end{itemize}
\end{rSection}

%----------------------------------------------------------------------------------------
%   ACHIEVEMENTS
%----------------------------------------------------------------------------------------

\begin{rSection}{ACHIEVEMENTS}
    \begin{itemize}
        \item Solved \textbf{500+} DSA problems across platforms like LeetCode, GeeksforGeeks, and CodeChef.
        \item Achieved a maximum rating of \textbf{1677 on CodeChef}.
    \end{itemize}
\end{rSection}

\end{document}





### Live Projects - 
```
Projects

form
form-rho-henna.vercel.app


events
events-zeta-two.vercel.app


z-run
z-run.vercel.app

image-editor
image-editor-gray.vercel.app

```