import argparse
from sentence_transformers import SentenceTransformer, util

def compute_similarity(text1, text2, model_name='all-MiniLM-L6-v2'):
    model = SentenceTransformer(model_name)

    # Compute embeddings for both texts
    embedding1 = model.encode(text1, convert_to_tensor=True)
    embedding2 = model.encode(text2, convert_to_tensor=True)

    # Compute cosine similarity
    cos_sim = util.pytorch_cos_sim(embedding1, embedding2)

    return cos_sim.item()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--text1", type=str, required=True)
    parser.add_argument("--text2", type=str, required=True)
    args = parser.parse_args()

    similarity = compute_similarity(args.text1, args.text2)

    print(similarity)

