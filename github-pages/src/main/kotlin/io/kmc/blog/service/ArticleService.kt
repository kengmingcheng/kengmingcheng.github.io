package io.kmc.blog.service

import io.kmc.blog.model.Article
import io.kmc.blog.repository.ArticleRepository
import org.springframework.stereotype.Service

@Service
class ArticleService(
        private val articleRepo : ArticleRepository
) {

    fun create(article: Article) {
        articleRepo.create(article)
    }

    fun findById(id: Long) : Article? {
        val articleOptional = articleRepo.findById(id)
        return if (articleOptional.isPresent) articleOptional.get() else null
    }

    fun update(article: Article) {
        articleRepo.update(article)
    }

}