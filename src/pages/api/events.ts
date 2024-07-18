// src/pages/api/events.ts

import type { NextApiRequest, NextApiResponse } from 'next';

let cachedEventData: any = null; // For simplicity, using any type for demo purposes

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const eventData = req.body;
    cachedEventData = eventData; // For demo purposes, store in memory
    res.status(200).json({ message: 'Event data saved successfully', eventData });
  } else if (req.method === 'GET') {
    res.status(200).json(cachedEventData);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
