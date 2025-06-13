import {
    S3Client,
    PutObjectCommand,
    HeadBucketCommand,
    CreateBucketCommand,
    PutBucketPolicyCommand
} from '@aws-sdk/client-s3';

export const s3client = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY!,
        secretAccessKey: process.env.S3_SECRET_KEY!,
    },
    forcePathStyle: true,
});

export const BUCKET_NAME = process.env.S3_BUCKET!;

export async function createBucket(bucketName: string) {
    try {
        await s3client.send(new HeadBucketCommand({ Bucket: bucketName }));
        console.log(`Bucket "${bucketName}" existe déjà.`);
    } catch (err: unknown) {
        if (err instanceof Error && err.name === "NotFound") {
            await s3client.send(new CreateBucketCommand({ Bucket: bucketName }));
            console.log(`Bucket "${bucketName}" créé avec succès.`);
        } else {
            throw err;
        }
    }
}

export async function setBucketPublicRead(bucketName: string) {
    const publicReadPolicy = {
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Principal: "*",
                Action: ["s3:GetBucketLocation", "s3:ListBucket"],
                Resource: `arn:aws:s3:::${bucketName}`
            },
            {
                Effect: "Allow",
                Principal: "*",
                Action: "s3:GetObject",
                Resource: `arn:aws:s3:::${bucketName}/*`
            }
        ]
    };

    try {
        await s3client.send(new PutBucketPolicyCommand({
            Bucket: bucketName,
            Policy: JSON.stringify(publicReadPolicy)
        }));
        console.log(`Bucket policy mise à jour pour ${bucketName}, accès lecture publique activé.`);
    } catch (err) {
        console.error("Erreur lors de la mise à jour de la policy:", err);
    }
}