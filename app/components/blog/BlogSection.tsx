'use client'

import React, { useEffect, useState } from "react";
import { query } from "@/app/lib/hashnode";
import { FiSearch, FiFilter, FiTag, FiEye, FiHeart } from 'react-icons/fi';

export default function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await query({
        query: `
          query($host: String!) {
            publication(host: $host) {
              posts(first: 20) {
                edges {
                  node {
                    title
                    brief
                    url
                    publishedAt
                    views
                    reactionCount
                    readTimeInMinutes
                    ogMetaData { image }
                    tags { name }
                  }
                }
              }
            }
          }
        `,
        variables: {
          host: 'mmoujane.hashnode.dev'
        }
      });
      setPosts(result.data.publication.posts.edges.map((edge: any) => edge.node));
    }
    fetchData();
  }, []);

  // Derive all tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags.map((tag: any) => tag.name))));

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.brief.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.some((tag: any) => tag.name === selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section className="py-20 bg-gray-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on blockchain development, DeFi, and the future of Web3.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FiSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="relative">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="appearance-none bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-8"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
              <FiFilter size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Horizontal slider */}
        <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          {filteredPosts.map((post: any) => (
            <article
              key={post.url}
              className="flex-shrink-0 w-96 md:w-[32%] bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 snap-start"
              style={{ minWidth: '320px', maxWidth: '400px' }}
            >
              <img 
                src={post.ogMetaData?.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag: any) => (
                    <span key={tag.name} className="text-xs px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded border border-cyan-600/30">
                      <FiTag size={12} className="inline mr-1" />
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-cyan-400 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{post.brief}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>{post.readTimeInMinutes} min read</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <FiEye size={16} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiHeart size={16} />
                      <span>{post.reactionCount}</span>
                    </div>
                  </div>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}