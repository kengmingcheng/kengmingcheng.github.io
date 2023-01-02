package io.kmc.blog.rest

import io.kmc.blog.model.Article
import io.kmc.blog.service.ArticleService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@RequestMapping("/blog/api/post")
@RestController
class ArticleController
@Autowired constructor(
        val articleService: ArticleService
) {

    @GetMapping("/{id}")
    fun findById(@PathVariable title: Long): Article? {
        return articleService.findById(title)
    }

    @GetMapping("/list")
    fun getPage(@RequestParam pageId: Int,
                @RequestParam pageSize: Int): List<Article> {
        return listOf(
                Article(1, "ah ha!"),
                Article(2, "The Sorrows of Young Werther")
        )
    }

    @GetMapping("/search")
    fun searchWithKeyword(@RequestParam keyword: String): List<Article> {
        return listOf()
    }

    @PutMapping("upload")
    fun create(@RequestBody article: Article) {
        articleService.create(article)
    }

    @PostMapping("/update/{id}")
    fun update(@PathVariable id: Long, @RequestBody article: Article) {

    }

    @DeleteMapping("/delete/{id}")
    fun delete(@PathVariable id: Long) {

    }

}