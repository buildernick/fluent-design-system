'use client';

import * as React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Card,
  CardHeader,
  Title3,
  Body1,
  Text,
  Input,
  Button,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  SearchBox,
} from "@fluentui/react-components";
import {
  bundleIcon,
  Search24Regular,
  Search24Filled,
  Book24Regular,
  Book24Filled,
  VideoClip24Regular,
  VideoClip24Filled,
  Chat24Regular,
  Chat24Filled,
  Document24Regular,
  Document24Filled,
  Lightbulb24Regular,
  Lightbulb24Filled,
  People24Regular,
  People24Filled,
} from "@fluentui/react-icons";
import { AppLayout } from '@/components/Layout';

const SearchIcon = bundleIcon(Search24Filled, Search24Regular);
const DocumentationIcon = bundleIcon(Book24Filled, Book24Regular);
const VideoIcon = bundleIcon(VideoClip24Filled, VideoClip24Regular);
const ChatIcon = bundleIcon(Chat24Filled, Chat24Regular);
const GuideIcon = bundleIcon(Document24Filled, Document24Regular);
const TipsIcon = bundleIcon(Lightbulb24Filled, Lightbulb24Regular);
const CommunityIcon = bundleIcon(People24Filled, People24Regular);

const useStyles = makeStyles({
  container: {
    ...shorthands.padding("24px"),
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "48px",
    lineHeight: "1.2",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
    marginBottom: "16px",
    "& span": {
      color: tokens.colorBrandForeground1,
    },
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.5",
    color: tokens.colorNeutralForeground2,
    maxWidth: "800px",
    margin: "0 auto 32px",
  },
  searchContainer: {
    maxWidth: "600px",
    margin: "0 auto 48px",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "48px",
  },
  categoryCard: {
    cursor: "pointer",
    ...shorthands.transition("transform", "box-shadow"),
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: tokens.shadow8,
    },
  },
  cardContent: {
    ...shorthands.padding("16px"),
  },
  faqSection: {
    marginTop: "48px",
  },
  faqHeader: {
    textAlign: "center",
    marginBottom: "32px",
  },
  accordion: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  accordionHeader: {
    fontSize: "16px",
    fontWeight: "600",
  },
});

const supportCategories = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: <DocumentationIcon />,
    link: "/support/documentation",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides and walkthroughs",
    icon: <VideoIcon />,
    link: "/support/tutorials",
  },
  {
    title: "Live Chat",
    description: "Get real-time help from our support team",
    icon: <ChatIcon />,
    link: "/support/chat",
  },
  {
    title: "Quick Start Guides",
    description: "Get up and running quickly with our platform",
    icon: <GuideIcon />,
    link: "/support/guides",
  },
  {
    title: "Best Practices",
    description: "Tips and tricks for optimal usage",
    icon: <TipsIcon />,
    link: "/support/best-practices",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share knowledge",
    icon: <CommunityIcon />,
    link: "/support/community",
  },
];

const faqItems = [
  {
    question: "How do I get started with 3Ring?",
    answer: "Getting started with 3Ring is easy. First, create an account and choose your subscription plan. Then, follow our Quick Start Guide to set up your first project. Our step-by-step tutorials will guide you through the basics of setting up your cloud infrastructure.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our payment partners.",
  },
  {
    question: "How does billing work?",
    answer: "3Ring uses a pay-as-you-go model. You're only charged for the resources you use, calculated on an hourly basis. We provide detailed billing reports and usage analytics to help you track your expenses.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect immediately, and billing is prorated based on your usage. There are no penalties for changing plans.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple support channels including 24/7 email support, live chat during business hours, and priority phone support for enterprise customers. Our community forum is also a great resource for getting help from other users.",
  },
  {
    question: "How do you handle data security?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and maintain compliance with major security certifications. All data is backed up regularly and stored in secure, redundant locations.",
  },
];

export default function Support() {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <AppLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            How can we <span>help you?</span>
          </h1>
          <p className={styles.subtitle}>
            Find answers to common questions, explore our resources, or get in touch with our support team
          </p>
          <div className={styles.searchContainer}>
            <SearchBox
              placeholder="Search for help articles, tutorials, and more..."
              value={searchQuery}
              onChange={(e, data) => setSearchQuery(data.value)}
              size="large"
              contentBefore={<SearchIcon />}
            />
          </div>
        </header>

        <div className={styles.categoriesGrid}>
          {supportCategories.map((category) => (
            <Card 
              key={category.title}
              className={styles.categoryCard}
            >
              <CardHeader
                image={category.icon}
                header={<Title3>{category.title}</Title3>}
              />
              <div className={styles.cardContent}>
                <Body1>{category.description}</Body1>
              </div>
            </Card>
          ))}
        </div>

        <section className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <Title3>Frequently Asked Questions</Title3>
          </div>
          <Accordion className={styles.accordion}>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionHeader className={styles.accordionHeader}>
                  {item.question}
                </AccordionHeader>
                <AccordionPanel>
                  <Text>{item.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </AppLayout>
  );
} 