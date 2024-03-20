import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

def preprocess_food_item(df):
    if 'food_item' in df.columns:
        df['food_item'] = df['food_item'].fillna('').str.lower().str.replace('[^\w\s]', '')
    return df



# Function to perform TF-IDF-based food item search on combined data
def search_food_items(query, data1, data2):
    data1 = preprocess_food_item(data1)
    data2 = preprocess_food_item(data2)

    if not query:
        return pd.concat([data1,data2], ignore_index=True)

    tfidf_vectorizer = TfidfVectorizer()

    tfidf_matrix1 = tfidf_vectorizer.fit_transform(data1['food_item'])
    tfidf_matrix2 = tfidf_vectorizer.fit_transform(data2['food_item'])

    query_tfidf = tfidf_vectorizer.transform([query])

    cosine_similarities1 = linear_kernel(query_tfidf, tfidf_matrix1).flatten()
    cosine_similarities2 = linear_kernel(query_tfidf, tfidf_matrix2).flatten()

    matched_indices1 = [i for i, similarity in enumerate(cosine_similarities1) if similarity > 0]
    matched_indices2 = [i for i, similarity in enumerate(cosine_similarities2) if similarity > 0]

    matched_food_items1 = data1.iloc[matched_indices1]
    matched_food_items2 = data2.iloc[matched_indices2]

    combined_results = pd.concat([matched_food_items1, matched_food_items2], ignore_index=True)

    sorted_results = combined_results.sort_values(by='cost', ascending=True)

    return sorted_results
