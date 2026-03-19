# Backend Specification — Contact Form → Telegram

## Overview

This backend handles contact form submissions and sends the data directly to Telegram using a bot.

Flow:

User fills form  
→ request sent to API route  
→ API processes data  
→ message sent to Telegram  
→ response returned to frontend  

---

## Architecture

Frontend (Contact Form)
   ↓
POST /api/contact
   ↓
Next.js API Route
   ↓
Telegram Bot API
   ↓
Your Telegram Chat

---

## Tech Stack

- Next.js API Routes
- Fetch API
- Telegram Bot API

---

## Environment Variables

Create `.env.local` file:


TELEGRAM_BOT_TOKEN=8777331558:AAGgMd66Lma7wEc35-6P7shXU597PP3w67o
TELEGRAM_CHAT_ID=1029761211


⚠️ Never expose these in frontend code.

---

## API Route

File location:


/app/api/contact/route.ts


---

## API Implementation

```ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email format check
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      )
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    const text = `
New Contact Form

Name: ${name}
Email: ${email}
Message: ${message}
    `

    const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    const response = await fetch(telegramURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    })

    if (!response.ok) {
      throw new Error("Telegram API failed")
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    )
  }
}
Frontend Integration

Inside your ContactForm component:

const handleSubmit = async (e) => {
  e.preventDefault()

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  })

  const data = await res.json()

  if (data.success) {
    showPopup("success")
  } else {
    showPopup("error")
  }
}
Popup UX Logic

Success:

"Message sent. Vidyush will contact you soon..."

Error:

"Something went wrong, Please try again..."

Popup State Logic
const [popup, setPopup] = useState(null)

const showPopup = (type) => {
  setPopup(type)

  setTimeout(() => {
    setPopup(null)
  }, 5000)
}
Popup UI (Neo-Brutalism Style)
{popup && (
  <div className="fixed bottom-6 right-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-4 font-bold">
    {popup === "success"
      ? "Message sent. Vidyush will contact you soon..."
      : "Something went wrong, Please try again..."}
  </div>
)}
Validation Rules

All fields required

Valid email format

Optional: trim whitespace

Error Handling

Handled cases:

Missing fields

Invalid email

Telegram API failure

Server error

Testing Steps

Run project:

npm run dev

Fill form

Submit

Verify:

Message received on Telegram

Popup appears

Errors handled correctly

Security Notes

Never expose BOT TOKEN in frontend

Always use environment variables

Avoid logging sensitive data

Future Improvements (Optional)

Add rate limiting

Add spam protection

Store leads in database

Email fallback system

Final Flow Summary

User submits form
→ API validates input
→ sends message to Telegram
→ returns success or error
→ popup shown for 5 seconds