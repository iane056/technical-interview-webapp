import mongoose from "mongoose";
import Topic from "../models/topic.js";

export const topics = [
    {
      _id: "64b0a79871ac5ad2b373f4a5",
      title: "Arrays",
      content: "64af63f3c50d319acd12e5bd", // ID of Content
      problems: ["64b0a57d75537b0ab942edfd", "64b1d32abe0653857df5bfc4", "64b1f070e2dabccf25d42671"],
      length: "short",
      difficulty: "easy",
    },
    {
      _id: "64b0a79c4808f5b754ca2b19",
      title: "Stack",
      content: "64af69fde7b8e3839c5db07d", // ID of a Content
      problems: ["64b39ed613688bcd23cede06", "64b4bcf4d7055950382648ea", "64b71662c5b9fafab1d170fe"],
      length: "short",
      difficulty: "easy",
    },
    {
      _id: "64b0a7a1664e6698b9720575",
      title: "Binary Search",
      content: "64af6b3a1dbd1835d54ade22", // ID of a Content
      problems: ["64b7424aa9e904c794e46798", "64b7513e56a4d24f7eea88b8", "64bcf69e2f1ff54481e545ee"],
      length: "short",
      difficulty: "medium",
    },
    {
      _id: "64b0a7a4b5130ea9e3664ef0",
      title: "Linked List",
      content: "64af740f8cb835b6e53616d0", // ID of a Content
      problems: ["64be0052b47d0358a9311402", "64bee93bfb7de1c114f9f9a7", "64beecf1bbd0e386babc1347"],
      length: "short",
      difficulty: "medium",
    },
    {
      _id: "64b0a7a84e2fbc9509c28d64",
      title: "Trees",
      content: "64b06ad156a41ebc96130c62", // ID of a Content
      problems: ["64bef00eb9e9d60dca9e3559", "64bef448be0f5e5dfcfa2dbb", "64bf7dbcf8bb4fe94d307a89"],
      length: "medium",
      difficulty: "medium",
    },
    {
      _id: "64b0a7aea5c3fe2ade14f9c4",
      title: "Heap",
      content: "64b06c391035f07b0f5f65f8", // ID of a Content
      problems: ["64c0572caf3a4882de1a2a38", "64c05a31b83cb33cb4baa733", "64c05c88e4b6ce76a9a5d87a"],
      length: "medium",
      difficulty: "medium",
    },
    {
      _id: "64b0a7b20fe2987f17160099",
      title: "Graphs",
      content: "64b06fc8864d3dce86f3a3e7", // ID of a Content
      problems: ["64c06d1f9e46bec553c953e9", "64c08fa0f64ef52dd745e5fb", "64c092c118bf1ff73b6f589c"],
      length: "long",
      difficulty: "hard",
    },
    {
      _id: "64b0a7b6a28359d1e6367bff",
      title: "Dynamic Programming",
      content: "64b070dc699bd986d145a182", // ID of a Content
      problems: ["64c0bb5a1fc75b176268a7bb", "64be40b82be5025c53df612a", "64c0bdbc9bb6840492e317cc"],
      length: "long",
      difficulty: "hard",
    },
  ];

export async function seedTopics() {
  await Topic.deleteMany({});
  console.log("Old topics cleared");
  await Topic.insertMany(topics);
  console.log("Topic data seeding completed");
}
