
# ===========================================
# Assignment: Data Analysis with Pandas & Matplotlib
# ===========================================

# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris

# -------------------------------------------
# Task 1: Load and Explore the Dataset
# -------------------------------------------

# Load Iris dataset from sklearn
iris_data = load_iris(as_frame=True)
df = iris_data.frame  # Convert to pandas DataFrame

# Display first few rows
print("First 5 rows of the dataset:")
print(df.head())

# Check structure
print("\nDataset Info:")
print(df.info())

# Check for missing values
print("\nMissing values in dataset:")
print(df.isnull().sum())

# No missing values in iris, but let's show how to handle
df = df.dropna()

# -------------------------------------------
# Task 2: Basic Data Analysis
# -------------------------------------------

# Basic statistics
print("\nBasic statistics of numerical columns:")
print(df.describe())

# Grouping: mean petal length by species
grouped = df.groupby("target")["petal length (cm)"].mean()
print("\nAverage petal length per species:")
print(grouped)

# Interesting finding:
# Iris-setosa has much shorter petals compared to versicolor and virginica.

# -------------------------------------------
# Task 3: Data Visualization
# -------------------------------------------

# 1. Line chart (trend of sepal length for first 50 records)
plt.figure(figsize=(8,5))
plt.plot(df.index[:50], df["sepal length (cm)"][:50], marker="o", color="blue")
plt.title("Line Chart: Sepal Length (First 50 Records)")
plt.xlabel("Index")
plt.ylabel("Sepal Length (cm)")
plt.show()

# 2. Bar chart (average petal length per species)
species_names = iris_data.target_names
plt.figure(figsize=(6,4))
grouped.plot(kind="bar", color=["skyblue","orange","green"])
plt.title("Bar Chart: Avg Petal Length per Species")
plt.xlabel("Species")
plt.ylabel("Average Petal Length (cm)")
plt.xticks(ticks=range(3), labels=species_names, rotation=0)
plt.show()

# 3. Histogram (distribution of sepal length)
plt.figure(figsize=(6,4))
plt.hist(df["sepal length (cm)"], bins=20, color="purple", edgecolor="black")
plt.title("Histogram: Sepal Length Distribution")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Frequency")
plt.show()

# 4. Scatter plot (sepal length vs petal length)
plt.figure(figsize=(6,4))
sns.scatterplot(x="sepal length (cm)", y="petal length (cm)", hue="target", data=df, palette="Set1")
plt.title("Scatter Plot: Sepal Length vs Petal Length")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Petal Length (cm)")
plt.legend(title="Species", labels=species_names)
plt.show()

# -------------------------------------------
# Findings & Observations
# -------------------------------------------
"""
1. Iris-setosa flowers have much smaller petal lengths than the other species.
2. Sepal length values mostly range between 4.3 cm and 7.9 cm.
3. The scatter plot shows a clear separation of species based on petal length.
4. The bar chart confirms distinct differences in average petal length between species.
"""
