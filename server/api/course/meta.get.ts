import course from "~/server/courseData";
import { Course, Chapter, CourseMeta, OutlineLesson, OutlineChapter } from '~/types/course';

course as Course;


export default defineEventHandler((event): CourseMeta => {
  const outline: OutlineChapter[] = course.chapters.reduce(
    (prev: OutlineChapter[], chapter: Chapter) => {
      const lessons: OutlineLesson[] = chapter.lessons.map(
        (lesson) => ({
          title: lesson.title,
          slug: lesson.slug,
          number: lesson.number,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
        })
      );

      const chapterOutline: OutlineChapter = {
        title: chapter.title,
        slug: chapter.slug,
        number: chapter.number,
        lessons
      };

      return [...prev, chapterOutline];
    },
    []
  );

  return {
    title: course.title,
    chapters: outline
  };
})
