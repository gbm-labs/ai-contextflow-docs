---
title: Observability Standards
sidebar_position: 8
---

# Observability Standards

## Purpose
This standard defines how the system must expose its internal state to external observers.
Effective observability is the requirement for **Diagnosability** and **Reliability** in production.

Unlike simple "Logging", Observability answers specific questions:
- "Is the system healthy?"
- "Why is this specific request failing?"
- "What is the performance bottleneck?"

---

## 1. The Three Pillars

### 1.1 Logs (Events)
- **Structure**: Logs MUST be structured (JSON), not plain text.
- **Context**: Every log entry MUST contain context (Request ID, User ID, Tenant ID).
- **Levels**:
  - `ERROR`: Actionable failure requiring human intervention.
  - `WARN`: Unexpected state handled gracefully, but potentially risky.
  - `INFO`: Key lifecycle events (Startup, Job Completed, State Changed).
  - `DEBUG`: Granular developer context (payloads, variable states).

### 1.2 Metrics (Aggregates)
- Metrics measure "How much?" or "How fast?".
- **Golden Signals**: Every service must measure:
  - **Latency**: Time it takes to service a request.
  - **Traffic**: A demand placed on your system (e.g., req/sec).
  - **Errors**: The rate of requests that fail (e.g., HTTP 500s).
  - **Saturation**: How "full" your service is (e.g., CPU, Memory, Queue Depth).

### 1.3 Tracing (Request Lifecycle)
- A Trace ID MUST propagate across all service boundaries (Frontend -> Backend -> Database/Worker).
- Use standard headers (e.g., W3C Trace Context).

---

## 2. Implementation Rules

### 2.1 Frontend Telemetry
- **Errors**: All unhandled exceptions must be sent to an error tracking service (e.g., Sentry).
- **Performance**: Track specific "User Timing" events (e.g., "Time to First Interaction").
- **Privacy**: NEVER log PII (Personally Identifiable Information) or Credentials (passwords, tokens) in client-side logs.

### 2.2 Backend Logging Standard
```json
// GOOD (Structured)
logger.info("Order processed", {
  orderId: "123",
  userId: "user_456",
  durationMs: 45,
  status: "success"
});

// BAD (Unstructured string)
console.log("Order 123 processed for user 456 in 45ms");
```

### 2.3 Health Checks
Every deployable service MUST expose:
- `/health/live`: Is the process running? (Used for restarts)
- `/health/ready`: Can it accept traffic? (Used for load balancing)

---

## 3. Alerts & Anomalies

- **Alert on Symptoms, not Causes**:
  - *Good*: "High Error Rate on Checkout" (Symptom)
  - *Bad*: "Low CPU usage on Worker Node 3" (Cause/Noise)
- **Actionable**: Every alert must have a defined **Runbook** or clear action path.

---

## 4. Tools & Integration

*(Define your project-specific stack here in the Project Brief, e.g., OpenTelemetry, Sentry, Datadog, Prometheus)*

---

## 5. Definition of Done (Observability)
A feature is NOT done until:
- [ ] Meaningful logs are emitted for success/failure paths.
- [ ] Critical errors are captured in the error tracker.
- [ ] It does not introduce "Log Spam" (high-volume, low-value logs).
