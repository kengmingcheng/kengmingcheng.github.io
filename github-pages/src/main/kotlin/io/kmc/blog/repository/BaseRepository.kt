package io.kmc.blog.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.NoRepositoryBean
import java.io.Serializable

@NoRepositoryBean
interface BaseRepository<T, out ID : Serializable> : JpaRepository<T, @UnsafeVariance ID> {

    fun create(t: T) {
        save(t)
    }

    fun update(t: T) {
        save(t)
    }

    fun listAll() : List<T> {
        return findAll()
    }
}