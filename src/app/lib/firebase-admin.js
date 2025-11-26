import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "billify-a52d3",
      clientEmail:
        "firebase-adminsdk-fbsvc@billify-a52d3.iam.gserviceaccount.com",
      privateKey: "../../../prodfy-admin-sdk.json",
    }),
  });
}

export default admin;
