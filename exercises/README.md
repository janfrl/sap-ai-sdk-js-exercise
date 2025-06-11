# JavaScript Exercises

These hands-on tasks demonstrate the orchestration features of the SAP Cloud SDK for AI. Orchestration harmonizes multiple generative AI models through a unified client and offers powerful modules to enhance your prompts and responses:

- **LLM Configuration** – Choose your model, version and custom parameters.  
  See [LLM Configuration](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#llm-configuration)
- **Harmonized API** – Swap between foundation models without code changes.  
  See [Harmonized API](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#harmonized-api)
- **Templating** – Define static or dynamic prompts, use placeholders, reference central templates or local YAML files.  
  See [Templating](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#templating), [Prompt Registry](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#prompt-registry), [Local Prompt Template](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#local-prompt-template)
- **Function Calling** – Enable multi-step workflows by letting the model invoke your functions (tools).  
  See [Function Calling](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#function-calling)
- **Response Format** – Enforce structured outputs using JSON Schema or Zod.  
  See [Response Format](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#response-format)
- **Message History** – Maintain conversation context across requests.  
  See [Message History](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#message-history)
- **Image Recognition** – Send images as part of user messages and get multimodal responses.  
  See [Image Recognition](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#image-recognition)
- **Content Filtering** – Safeguard both input and output with Azure or Llama Guard filters.  
  See [Content Filtering](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#content-filtering), [Azure Content Filter](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#azure-content-filter), [Llama Guard Filter](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#llama-guard-filter)
- **Data Masking** – Mask sensitive data in prompts, with optional SAP Data Privacy integration.  
  See [Data Masking](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#data-masking), [SAP Data Privacy Integration](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#sap-data-privacy-integration)
- **Grounding** – Inject external or domain-specific data (e.g. documents, vectors) into your prompts.  
  See [Grounding](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#grounding)
- **Translation** – Automatically translate input and output via SAP’s Document Translation.  
  See [Translation](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#translation)
- **JSON Configuration** – Load entire workflows from AI Launchpad JSON exports.  
  See [Use JSON Configuration from AI Launchpad](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#use-json-configuration-from-ai-launchpad)
- **Streaming** – Stream real-time responses, delta content, tool-calls, and control via AbortController.  
  See [Streaming](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#streaming)
- **Advanced Deployment Options** – Customize resource groups, request headers, or destinations.  
  See [Custom Resource Group](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#custom-resource-group), [Custom Request Configuration](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#custom-request-configuration), [Custom Destination](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#custom-destination)

---

## Exercises

- [Exercise 0](./ex0/README.md) – Preparation and API overview  
- [Exercise 1](./ex1/README.md) – Getting LLM Access via Orchestration Service  
- [Exercise 2](./ex2/README.md) – Prompt Templating  
- [Exercise 3](./ex3/README.md) – Content Filtering  
- [Exercise 4](./ex4/README.md) – Data Masking  
- [Exercise 5](./ex5/README.md) – Orchestration Chatbot  

For full details, see the [official JS overview](https://sap.github.io/ai-sdk/docs/js/overview-cloud-sdk-for-ai-js) and the [orchestration chat completion docs](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion).
