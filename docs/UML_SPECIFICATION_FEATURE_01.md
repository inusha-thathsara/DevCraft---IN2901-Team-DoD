# UML Specification & Architectural Design
## Feature 01: The Guided Coding Workspace & Anti-Boredom Engine
**Student:** Gunasekara M.I.T. (`244068K`)  
**Module:** Guided Tri-Panel IDE, Monaco Editor, Real-Time AST Validation & Meme Engine  
**Project:** DevCraft (IN2901 - Team DoD)  

---

## 📂 Generated Draw.io Files

All diagrams have been generated in native **Draw.io (`.drawio`) format** inside [`docs/diagrams/`](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/):

| Diagram Type | Filename | Description |
| :--- | :--- | :--- |
| **All-in-One Multi-Page** | [DevCraft_Feature01_Guided_Workspace_All_UML.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/DevCraft_Feature01_Guided_Workspace_All_UML.drawio) | Complete 7-page Draw.io workbook containing all diagrams in tabbed pages. |
| **Use Case Diagram** | [use_case_workspace.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/use_case_workspace.drawio) | Subsystem boundaries, user interactions, `<<include>>` and `<<extend>>` cases. |
| **Activity: Validation** | [activity_ast_validation.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/activity_ast_validation.drawio) | Code submission, AST parsing, silent Jest unit testing, and progressive step unlocking. |
| **Activity: Memes & Checks** | [activity_meme_and_check.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/activity_meme_and_check.drawio) | Swimlane workflow for contextual theory gatekeeper check and session fatigue meme trigger. |
| **Sequence: Validation** | [sequence_ast_validation.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/sequence_ast_validation.drawio) | Interaction sequence between Monaco, Zustand store, AST engine, Jest runner, and MongoDB. |
| **Sequence: Memes & Checks** | [sequence_meme_and_check.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/sequence_meme_and_check.drawio) | Sequence for prerequisite checkpoints and background fatigue activity triggers. |
| **Design Class Diagram (DCD)** | [class_diagram_workspace.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/class_diagram_workspace.drawio) | Object-oriented design showing React components, Zustand state, services, and Mongoose schemas. |
| **State Machine Diagram** | [state_machine_step_lifecycle.drawio](file:///e:/Documents/UoM/Sem3/IN2901/Project%20Proposals/IDE/docs/diagrams/state_machine_step_lifecycle.drawio) | Statechart of project steps from `STEP_LOCKED` to `VALIDATING_AST` to `STEP_COMPLETED`. |

---

## 1. Subsystem Use Case Diagram

### Purpose
Models how the learner interacts with the Guided Workspace, highlighting automated background services (`AST Validation Engine`, `Anti-Boredom Engine`) and extension points for diagnostics and memes.

```mermaid
flowchart TD
    subgraph System ["Guided Coding Workspace & Anti-Boredom Engine"]
        UC1(["Browse & Select Guided Project Step"])
        UC2(["View Step Instructions & Requirements"])
        UC3(["Write & Edit Code in Monaco Editor"])
        UC4(["View Real-Time Live UI Preview"])
        UC5(["Attempt Contextual Concept Pop-up Check"])
        UC6(["Trigger Background AST Code Validation"])
        UC7(["Run Sandboxed Unit Tests (Jest)"])
        UC8(["Unlock Subsequent Project Step"])
        UC9(["Display Inline Syntax & Logic Diagnostics"])
        UC10(["Trigger Context-Aware Programming Meme"])
        UC11(["Dismiss / Laugh / Snooze Meme Modal"])
    end

    Student["👤 Learner / Student"]
    ASTEngine["⚙️ Background AST Engine"]
    MemeEngine["🤖 Anti-Boredom Engine"]

    Student --> UC1
    Student --> UC2
    Student --> UC3
    Student --> UC4
    Student --> UC5
    Student --> UC6
    Student --> UC11

    UC6 -.->|"<<include>>"| UC7
    UC6 -.->|"<<include>>"| UC8
    UC9 -.->|"<<extend>> (on failure)"| UC6
    UC10 -.->|"<<extend>> (on fatigue)"| UC3
    UC11 -.->|"<<extend>>"| UC10

    ASTEngine --> UC6
    ASTEngine --> UC7
    MemeEngine --> UC10
```

---

## 2. Activity Diagram: AST Validation & Progressive Step Unlocking

### Purpose
Details the operational flow from user typing to AST parsing, structural validation, sandboxed Jest unit testing, and concurrent step unlocks with XP/streak events.

```mermaid
flowchart TD
    Start((●)) --> A1["Learner edits code in Monaco Editor"]
    A1 --> A2["Debounce timer elapses (1200ms) or 'Run' clicked"]
    A2 --> A3["Capture code buffer and send to AST Validation Engine"]
    A3 --> A4["Parse JS/JSX into Abstract Syntax Tree (AST)"]
    A4 --> D1{"Syntax Valid?"}
    
    D1 -- "No" --> Err1["Annotate Monaco with red markers & syntax hint"]
    Err1 -.-> A1
    
    D1 -- "Yes" --> A5["Verify required AST constructs (e.g. Express routes, hooks)"]
    A5 --> D2{"Required AST Nodes Present?"}
    
    D2 -- "No" --> Err2["Display architectural hint (e.g. missing route handler)"]
    Err2 -.-> A1
    
    D2 -- "Yes" --> A6["Execute silent Jest unit test specs in sandbox"]
    A6 --> D3{"All Tests Pass?"}
    
    D3 -- "No" --> Err3["Output assertion diff report; keep next step locked"]
    Err3 -.-> A1
    
    D3 -- "Yes" --> Fork1[==== Concurrent Updates ====]
    Fork1 --> B1["Persist step completion to MongoDB"]
    Fork1 --> B2["Dispatch XP & Streak event to Leaderboard"]
    Fork1 --> B3["Render celebration confetti & update Live Preview"]
    
    B1 --> Join1[==== Join ====]
    B2 --> Join1
    B3 --> Join1
    
    Join1 --> A7["Unlock next project step in Tri-Panel navigation"]
    A7 --> EndNode(((◉)))
```

---

## 3. Sequence Diagram: Real-Time AST Validation & Step Progression

### Purpose
Depicts the asynchronous request-reply lifelines between the React frontend, client state manager, backend Express controller, test sandbox, and database.

```mermaid
sequenceDiagram
    autonumber
    actor Learner as 👤 Learner
    participant UI as :TriPanelWorkspace
    participant Monaco as :MonacoEditorWrapper
    participant Store as :IDEStateManager (Zustand)
    participant API as :ASTValidationController
    participant Sandbox as :JestSandboxRunner
    participant DB as :MongoDB (learningProgress)

    Learner->>Monaco: typeCode(codeSnippet)
    Monaco->>Store: updateCodeBuffer(stepId, codeSnippet)
    Learner->>UI: click("Run & Validate")
    UI->>Store: triggerValidation(stepId)
    Store->>API: POST /api/workspace/validate { stepId, code, userId }
    API->>API: parseToAST(code) & verifyRequiredNodes()
    API->>Sandbox: executeSilentTests(code, stepTestSpecs)
    activate Sandbox
    Sandbox->>Sandbox: runJestTestSuites()
    Sandbox-->>API: testReport { passed: true, assertions: 4/4 }
    deactivate Sandbox
    API->>DB: updateOne({ userId, stepId }, { status: 'COMPLETED' })
    DB-->>API: writeAcknowledgement
    API-->>Store: 200 OK { success: true, nextStepUnlocked: 2, xp: +50 }
    Store->>UI: updateStepStatus(nextStepId, 'UNLOCKED')
    Store->>UI: triggerCelebrationFeedback()
    UI->>UI: renderConfetti() & compileLivePreview()
    UI-->>Learner: displaySuccessToast() & unlockNextStep()
```

---

## 4. State Machine Diagram: Project Step Lifecycle & IDE States

### Purpose
Exhibits the strict state progression of guided project steps, ensuring learners cannot bypass unverified code blocks or complex concepts without validation.

```mermaid
stateDiagram-v2
    [*] --> STEP_LOCKED
    
    STEP_LOCKED --> CONCEPT_CHECK_PENDING : Previous step done & requiresCheck == true
    STEP_LOCKED --> CODING_ACTIVE : Previous step done & requiresCheck == false
    
    CONCEPT_CHECK_PENDING --> CODING_ACTIVE : Answer Correct / Unlock Editor
    CONCEPT_CHECK_PENDING --> CONCEPT_CHECK_PENDING : Answer Incorrect / Show Hint
    
    CODING_ACTIVE --> VALIDATING_AST : runValidation() / Auto or Debounce
    
    VALIDATING_AST --> SYNTAX_ERROR_FLAGGED : Syntax/AST Error
    SYNTAX_ERROR_FLAGGED --> CODING_ACTIVE : User modifies code
    
    VALIDATING_AST --> UNIT_TESTS_RUNNING : AST Structure Verified
    
    UNIT_TESTS_RUNNING --> TESTS_FAILED : Assertion Failure
    TESTS_FAILED --> CODING_ACTIVE : User modifies code
    
    UNIT_TESTS_RUNNING --> STEP_COMPLETED : All Test Assertions Pass
    
    STEP_COMPLETED --> STEP_LOCKED : More steps exist in project
    STEP_COMPLETED --> [*] : Final project step completed

    CODING_ACTIVE --> MEME_MODAL_ACTIVE : Active >= 25m OR Error Streak >= 3
    MEME_MODAL_ACTIVE --> CODING_ACTIVE : Dismiss / Back to code
```

---

## 5. Design Class Diagram (DCD): Guided Workspace Architecture

### Class Details & Component Responsibilities
* **`IDEWorkspace`**: Top-level Tri-Panel grid layout managing panel dimensions and state synchronizations.
* **`InstructionsPanel`**: Renders markdown instructions, step objectives, and collapsible progressive hints.
* **`MonacoEditorWrapper`**: Integrates Microsoft Monaco Editor API with custom themes, syntax highlighting, and inline diagnostic markers.
* **`LivePreviewRenderer`**: Manages sandboxed iframe compilation for live MERN UI previews.
* **`ContextualCheckModal`**: Modal dialog blocking the editor until prerequisite theoretical questions are answered.
* **`MemePopupManager`**: Monitors session activity, keystrokes, and consecutive errors to trigger anti-burnout memes.
* **`IDEStateManager`**: Zustand/Redux centralized store handling code buffers, validation states, and step navigation.
* **`ASTValidationService`**: Backend AST parsing service using Babel/Bespoke parser to verify structural integrity.
* **`JestSandboxRunner`**: Isolated worker executing unit tests safely with strict timeouts.
* **`ProjectStepModel` & `LearningProgressModel`**: Mongoose data schemas for project steps and individual student learning tracks.
