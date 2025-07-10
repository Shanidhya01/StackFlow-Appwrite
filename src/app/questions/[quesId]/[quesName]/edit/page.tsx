export const runtime = "nodejs"; // ✅ Ensures Node.js runtime (avoids Edge Runtime issues)

import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/sever/config";
import React from "react";
import EditQues from "./EditQues";

interface PageProps {
  params: Promise<{ quesId: string; quesName: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { quesId } = await params;
  const question = await databases.getDocument(db, questionCollection, quesId);

  return <EditQues question={question} />;
};

export default Page;
