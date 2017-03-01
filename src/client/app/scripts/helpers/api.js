export const apiKey = '91a53883772d44bf8ee89d81249d4ac7';
export const sourcesApi = 'https://newsapi.org/v1/sources';
export const newsApi = (source, sortBy) => {
  return `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`;
};
