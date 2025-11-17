"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CategoryDropdown = ({ categories }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      router.push(`?category=${category}`);
    } else {
      router.push('/products');
    }
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleChange}
      className="m-6 h-10 border text-l pr-1 border-gray-300 rounded-2xl bg-white shadow-xs hover:border-blue-500 focus:border-blue-500 outline-none cursor-pointer capitalize">
      <option value="" className='text-center'>Alle kategorier</option>
    
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
