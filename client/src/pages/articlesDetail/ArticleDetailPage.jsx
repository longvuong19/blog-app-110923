import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-01T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-01T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-01T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-01T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Education",
  "Health",
  "Technology",
  "Food",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img src={images.Post1Image} alt="" className="rounded-xl w-full" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae dui ante. Sed ornare ipsum in magna semper, in dapibus
              sapien molestie. Aenean lacinia sed urna nec accumsan. Etiam nec
              euismod enim, id porta erat. Duis vel pretium lacus. Sed placerat
              pellentesque volutpat. Ut ante turpis, cursus et commodo semper,
              fringilla a nibh. Quisque pellentesque purus quis augue eleifend
              porta. Sed id dui sit amet neque semper molestie. Mauris odio
              lorem, tincidunt vitae porttitor id, pellentesque nec nisl.
              Vestibulum sagittis metus sed lorem placerat molestie. Nullam et
              eleifend libero, eu mollis arcu. Aliquam lacus augue, tincidunt ut
              laoreet vitae, tristique et neque. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Sed elementum nisl dui, non
              accumsan ex auctor a. Sed nisi diam, fermentum vel orci non,
              faucibus commodo turpis. Cras faucibus mauris vel libero dignissim
              feugiat. Vivamus nunc neque, vestibulum in elit nec, porta semper
              mi. Morbi vehicula lectus at tincidunt consectetur. Cras lacinia
              turpis sed ex tempor, in pellentesque mi tempor. Phasellus eget
              placerat massa. Proin rutrum, metus et varius ullamcorper, est
              neque elementum nulla, id ullamcorper leo mauris vel ipsum. Fusce
              gravida est a sapien imperdiet, rutrum cursus felis dapibus. Proin
              imperdiet luctus justo, nec tincidunt odio fringilla vitae.
              Phasellus faucibus libero ac dui imperdiet feugiat. Curabitur id
              venenatis sem.
            </p>
          </div>
        </article>
        <SuggestedPosts
          header="Latest Articles"
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
