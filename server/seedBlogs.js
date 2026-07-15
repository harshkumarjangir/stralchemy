import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';
import connectDB from './config/db.js';

dotenv.config();

const dummyBlogs = [
  {
    title: 'Employer Branding: Attracting Talent Through Your Company\'s Identity',
    slug: 'employer-branding-attracting-talent',
    author: 'Stralchemy',
    isPublished: true,
    publishedAt: new Date('2026-07-08'),
    tags: ['brandidentity', 'branding', 'employerbranding', 'evp', 'stralchemy', 'strategy'],
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', // generic placeholder
    content: `
<h2>Why Employer Branding Matters</h2>
<ul>
  <li><strong>Talent Attraction:</strong> Strong employer brands stand out in crowded job markets.</li>
  <li><strong>Retention and Loyalty:</strong> Employees stay longer when they feel aligned with company values.</li>
  <li><strong>Cost Efficiency:</strong> A compelling brand reduces recruitment costs by drawing candidates organically.</li>
  <li><strong>Cultural Consistency:</strong> Employer branding reinforces identity across internal and external touchpoints.</li>
  <li><strong>Reputation Management:</strong> Positive perception strengthens both hiring and customer trust.</li>
</ul>

<h2>Key Strategies for Building Employer Branding</h2>
<p><strong>Define Your Identity</strong></p>
<ul>
  <li>Clarify your mission, values, and workplace culture.</li>
</ul>

<p><strong>Showcase Employee Stories</strong></p>
<ul>
  <li>Share authentic testimonials and success journeys to humanize your brand.</li>
</ul>

<p><strong>Leverage Digital Presence</strong></p>
<ul>
  <li>Use LinkedIn, careers pages, and social media to highlight culture and opportunities.</li>
</ul>

<p><strong>Align Internal and External Messaging</strong></p>
<ul>
  <li>Ensure recruitment campaigns reflect the same values employees experience daily.</li>
</ul>

<p><strong>Invest in Development</strong></p>
<ul>
  <li>Promote learning, growth, and career progression as part of your brand promise.</li>
</ul>

<h2>Advanced Employer Branding Tactics</h2>
<ul>
  <li><strong>Employer Value Proposition (EVP):</strong> Craft a clear statement of what employees gain by joining your company.</li>
  <li><strong>Thought Leadership:</strong> Position leaders as voices in industry conversations to elevate credibility.</li>
  <li><strong>Community Engagement:</strong> Highlight CSR initiatives and social impact to attract purpose-driven talent.</li>
  <li><strong>Recognition Programs:</strong> Showcase how you celebrate employee contributions.</li>
  <li><strong>Transparency:</strong> Share honest insights into workplace culture to build trust.</li>
</ul>

<h2>Examples of Employer Branding Done Right</h2>
<ul>
  <li><strong>Google:</strong> Promotes innovation and growth opportunities as core to its identity.</li>
  <li><strong>Patagonia:</strong> Attracts purpose-driven talent by aligning with environmental activism.</li>
  <li><strong>LinkedIn:</strong> Builds credibility by showcasing employee voices and professional development.</li>
</ul>

<h2>How Stralchemy Guides Employer Branding</h2>
<p>At Stralchemy, we help companies transform their identity into a talent magnet.</p>
<ul>
  <li><strong>Identity Mapping:</strong> Defining values and culture that resonate with candidates.</li>
  <li><strong>EVP Development:</strong> Crafting clear, compelling employer value propositions.</li>
  <li><strong>Strategic Storytelling:</strong> Showcasing authentic employee experiences across platforms.</li>
  <li><strong>Performance Analysis:</strong> Measuring impact on recruitment, retention, and engagement.</li>
</ul>

<h2>Final Thought</h2>
<p>Employer branding isn't about slogans—it's about authenticity. By aligning your company's identity with the values and aspirations of talent, you create a workplace that attracts, engages, and retains the people who drive growth.</p>
<p><strong>Ready to turn your company's identity into a talent magnet?</strong></p>
<p><strong>With Stralchemy, every employer branding strategy becomes a pathway to stronger teams and sustainable success.</strong></p>
    `
  },
  {
    title: 'Mobile-First Marketing: Optimizing for the Small Screen',
    slug: 'mobile-first-marketing',
    author: 'Stralchemy',
    isPublished: true,
    publishedAt: new Date('2026-07-01'),
    tags: ['mobilemarketing', 'digitalstrategy', 'ux'],
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    content: '<p>Mobile devices account for over half of global web traffic. If your strategy isn\'t mobile-first, you\'re leaving growth on the table...</p>'
  },
  {
    title: 'Future Scheduled Blog Post',
    slug: 'future-scheduled-post',
    author: 'Admin',
    isPublished: true,
    publishedAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in the future
    tags: ['future', 'scheduling'],
    content: '<p>This post is scheduled and should not appear on the public site yet.</p>'
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected for seeding...');

    await Blog.deleteMany();
    console.log('Cleared existing blogs');

    await Blog.insertMany(dummyBlogs);
    console.log('Inserted dummy blogs');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding DB:', error);
    process.exit(1);
  }
};

seedDB();
