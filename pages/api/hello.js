// API Route in Next.js
// Documentation: https://nextjs.org/docs/api-routes/introduction

// This handler manages requests to the API route.
export default function handler(req, res) {
  // Set the status code to 200 (OK) and return a JSON response.
  res.status(200).json({ 
    name: "John Doe" 
  });
}
