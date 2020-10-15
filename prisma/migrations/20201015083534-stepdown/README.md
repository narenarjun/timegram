# Migration `20201015083534-stepdown`

This migration has been generated by Narendran at 10/15/2020, 2:05:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."_UserFollow" DROP CONSTRAINT "_UserFollow_A_fkey"

ALTER TABLE "public"."_UserFollow" DROP CONSTRAINT "_UserFollow_B_fkey"

DROP TABLE "public"."_UserFollow"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201015070152-init..20201015083534-stepdown
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -16,13 +16,13 @@
   email     String    @unique
   firstName String    @default("")
   lastName  String?
   bio       String?
-  following User[]    @relation("UserFollow", references: [id])
-  followers User[]    @relation("UserFollow", references: [id])
-  posts     Post[]
-  likes     Like[]
-  comments  Comment[]
+  // following User[]    @relation("UserFollow", references: [id])
+  // followers User[]    @relation("UserFollow", references: [id])
+  // posts     Post[]
+  // likes     Like[]
+  // comments  Comment[]
 }
 model Post {
   id       Int       @id
```

