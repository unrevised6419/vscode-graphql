---
"vscode-apollo": patch
---

Fix go-to-definition on schema fields opening the wrong file when `localSchemaFile` is relative and the `apollo.config` file lives in a subfolder. The schema source URI (and the document-exclusion glob) is now resolved relative to the config file's directory instead of the process working directory, so Cmd+Click jumps to the real schema file instead of a non-existent one in the workspace root.
