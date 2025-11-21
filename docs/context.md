# 🇰🇷 KR-Move Planner — Project Description

A fullstack dashboard to help users prepare their relocation to **South Korea under the E-7 work visa**, with AI-generated guidance and practical tracking tools.

---

## 🎯 Purpose

KR-Move Planner is designed to:

- generate a **personal relocation strategy** for each user,
- guide them through the **E-7 visa process**,
- help track progress with **tasks, a timeline, and job applications**,
- produce a final **Expat Card** when relocation prep is complete,
- demonstrate **clean fullstack architecture** + **AI integration**.

This project aligns with my personal goal of working in **South Korea (2027–2028)**.

---

## 🧩 Features (MVP)

### 1. 🔐 Access Request System

To protect AI costs and avoid spam, users must request access by filling a form:

- Pseudo  
- Company  
- Position  
- Hiring status  

This creates a record in `prospects`.  
I approve or reject the request from an **admin panel**.

Once approved, the user receives credentials by email.

---

### 2. 🧍 Onboarding Profile

At first login, the user must complete:

- First name  
- Age  
- Nationality  
- Annual salary (€)  
- Years of experience  
- Job title  
- Highest degree  

This profile is stored in the database (`profiles` table).

---

### 3. 🧠 AI Strategy Generation

After onboarding, the backend calls the AI API to generate:

1. **A relocation strategy** (HTML/Markdown)  
2. **A task list** (structured JSON)

Both are saved in:

- `relocation_strategies`
- `tasks`

HTML is sanitized before display.

---

### 4. 🗂 Dashboard

The dashboard contains:

#### 🧩 Strategy Panel  
Shows the AI-generated relocation strategy.

#### ✔ Task List (sidebar)  
Checklist with 3 states:

- TODO  
- IN_PROGRESS  
- DONE  

Users can update tasks manually.

#### 📈 Progress Timeline  
A percentage bar computed from tasks:

progress = tasks_done / tasks_total * 100

#### 💼 Job Applications Tracker  

Users can track:

- Company  
- Position  
- Contact  
- Application date  
- Status  
- Notes  

---

### 5. 🎉 Expat Card

Generated when:

- All tasks are completed  
- A job application is marked as HIRED  

It displays:

- Pseudo  
- Position  
- Company  
- Days before expatriation  
- Congratulations message  

Could optionally be displayed on a **Wall of Expats**.

---

## 🧱 Technical Architecture

### Frontend

- React or Next.js  
- TypeScript  
- Auth pages  
- Dashboard (strategy, tasks, job tracker)  

### Backend

- Node.js (Express / Nest) or Symfony  
- JWT auth  
- Modules:
  - auth  
  - admin/prospects  
  - profile  
  - ai/strategy  
  - tasks  
  - applications  

### Database (PostgreSQL)

Tables:

```txt
users
profiles
prospects
relocation_strategies
tasks
job_applications
```
## 🧭 Vision Statement

KR-Move Planner is intended to be:

- a polished **fullstack portfolio project**,  
- a professional example of **AI-powered product features**,  
- a useful **relocation dashboard** for future expatriates,  
- a project aligned with my own **E-7 visa plan**,  
- a demonstration of **clean architecture**, **UX thinking**, and **real-world problem solving**,  
- a strong asset for **Korean recruiters** assessing technical ability and long-term motivation.

The goal is to build the exact tool I wish existed when preparing for relocation — combining engineering, AI, and practical guidance.

---

## 📝 Next Steps (when returning to the project)

1. **Finish KR-NKAcademy first**.  
2. Resume KR-Move Planner with:
   - database schema creation,  
   - access request form (prospects),  
   - admin approval flow,  
   - onboarding profile page.  
3. Implement the **AI strategy generator**.  
4. Build the **dashboard structure**:
   - strategy panel,  
   - tasks sidebar,  
   - progress timeline.  
5. Add the **job applications tracker**.  
6. Implement the **Expat Card** generation.  
7. Polish UI, add loading states, error handling, and validation.  


