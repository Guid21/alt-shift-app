import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { ApplicationCard, ApplicationsGrid, ApplicationsList } from '@/widgets/applications/List';
import type { Application } from '@/entities/application/types';

const mockApplications: Application[] = [
  {
    id: '1',
    jobTitle: 'Frontend Developer',
    company: 'Tech Corp',
    skills: 'React, TypeScript, CSS',
    details: 'Building UI for enterprise apps',
    generatedText: [
      'Dear Hiring Manager,',
      'I am excited to apply for the Frontend Developer position at Tech Corp and I am confident my skills in React, TypeScript, and CSS align with your needs.',
      'I enjoy building intuitive interfaces for enterprise products and can help ship reliable, accessible UI quickly.',
      'Thank you for considering my application. I look forward to discussing how I can contribute.',
    ],
    createdAt: Date.now(),
  },
  {
    id: '2',
    jobTitle: 'Backend Engineer',
    company: 'Data Systems',
    skills: 'Node.js, PostgreSQL, Docker',
    details: 'Microservices and data pipelines',
    generatedText: [
      'Hello team,',
      'Here is my tailored application for the Backend Engineer role at Data Systems.',
      'I have shipped Node.js services backed by PostgreSQL and Docker, and I enjoy building reliable data pipelines.',
      'I would love to help strengthen your platform. Please let me know if you have any questions.',
    ],
    createdAt: Date.now(),
  },
  {
    id: '3',
    jobTitle: 'Product Manager',
    company: 'Productive Inc.',
    skills: 'Roadmaps, Discovery, Analytics',
    details: 'Leading cross-functional teams',
    generatedText: [
      'Hello team,',
      'I am excited to apply for the Product Manager position at Productive Inc.',
      'I have led discovery, analytics, and roadmaps for cross-functional teams, and I focus on delivering measurable outcomes.',
      'Thank you for your consideration. I would be glad to discuss how I can support your roadmap.',
    ],
    createdAt: Date.now(),
  },
  {
    id: '5',
    jobTitle: 'Project Manager',
    company: 'Test Inc.',
    skills: 'Roadmaps, Discovery, Analytics',
    details: 'Leading cross-functional teams',
    generatedText: undefined,
    createdAt: Date.now(),
  },
];

const meta = {
  title: 'Widgets/Applications/List',
  component: ApplicationsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ApplicationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridOnly: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <ApplicationsGrid items={mockApplications} />
    </div>
  ),
};

export const Cards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      }}
    >
      {mockApplications.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </div>
  ),
};
