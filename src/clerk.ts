import "dotenv/config";
import { clerkClient } from "@clerk/clerk-sdk-node";

const clerkAuth = async (token: string | null) => {
  try {
    return !!token
      ? clerkClient.verifyToken(token, {
          secretKey: String(process.env["CLERK_SECRET_KEY"]),
        })
      : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

(async () =>
  await clerkAuth(
    "eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18yVmhvYmNUVFZQcW5kdjNZc0FwOWpDZW5pVjMiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwczovL2Rldi50aWVvdXQuaW8iLCJjbGVya0lkIjoidXNlcl8yVmkwYzZNemtWU21qS09yUGhRSXpPdFJKWkIiLCJjcmVhdGVkQXQiOjE2OTUzMDM2NjksImVtYWlsIjoiZGF2aWRAdGllb3V0LmlvIiwiZXhwIjoxNzEyNTg3OTgwLCJmdWxsbmFtZSI6IteT15XXmdeTINeT15fXldeR15nXpSIsImlhdCI6MTcxMjU4NzkyMCwiaWQiOiJjZjRlODc1NC1iODMwLTRkYmItODkzNC0yZGRjYjcxZWZjZDAiLCJpc3MiOiJodHRwczovL2RlY2VudC1tb2xlLTcuY2xlcmsuYWNjb3VudHMuZGV2IiwianRpIjoiNjdiZDQ2YzJkOTc4YWJiMzM3MGEiLCJuYmYiOjE3MTI1ODc5MTAsInBob25lIjoiKzk3MjU0Nzc5NTAwOSIsInNpZCI6InNlc3NfMmVvOWNxOHBWMXhLUjUzd2c1eDlzSUdvY0FoIiwic3ViIjoidXNlcl8yVmkwYzZNemtWU21qS09yUGhRSXpPdFJKWkIiLCJ1cGRhdGVkQXQiOjE3MTI1ODc5MTl9.T4c3DMnpjMF23ske7mwo5WbDbF-7QxCLj0FlH1ZalG5tohk0t1xwF-klB69TgLbRDMvrbA3SmJ21-NaqGefQd0g1Izo8zxsEWlpHlRDHzK7W111ocHcBQTa8YpkFBMh0ggw_ZdYbTsCxUKX1eMvakSwKoAYOw_a-h0UUML1ryGUfsfCTmSxdtF8d1dqL-3eRsILKmsth0djf7RSU_7pBN6KeThdsMxXAdLsjr44DuVMku2eF9ohlGHsreIkeJ5pEkzm0Dn9uwBgjGsRLixhFm9nTGQflbJw6zRh786ciIut_MkmPzIISV8jUHB4X9NfdpDKPhPgwc33Lvwhan4B82A"
  ))();
