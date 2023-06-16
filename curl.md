Request:

curl https://api.openai.com/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello!"}]
  }

Response:

{
  "id": "chatcmpl-7S2SK4aC19VO30p7b5iQ61uOKUcgS",
  "object": "chat.completion",
  "created": 1686916980,
  "model": "gpt-3.5-turbo-0301",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 10,
    "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hi there! How may I assist you today?"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}