import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCart from "../../components/ArticleCart";

const Articles = () => {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCart className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <ArticleCart className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <ArticleCart className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
        <ArticleCart className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
