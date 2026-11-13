export interface Certificate {
  title: string;
  credential: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const certificates: Certificate[] = [
  {
    title: "n8n AI Agent Bootcamp",
    credential: "Certificate of Participation",
    issuer:
      "School of Computational Intelligence, Joy University, in collaboration with Startup Incubators Club and GenLab Private Limited",
    date: "3 November 2026",
    description: "Participated in the n8n AI Agent Bootcamp.",
    image: "/certificates/n8n-ai-agent-bootcamp.jpg",
    imageAlt: "Certificate of participation in the n8n AI Agent Bootcamp",
  },
  {
    title: "Full Stack Development Internship",
    credential: "One-week internship completion",
    issuer: "Marcello Tech",
    date: "21–28 September 2026 · Issued 1 October 2026",
    description: "Successfully completed a one-week internship in Full Stack Development.",
    image: "/certificates/full-stack-internship.jpg",
    imageAlt: "Certificate of completion for a one-week Full Stack Development internship",
  },
];
