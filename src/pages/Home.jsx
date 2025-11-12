import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoryHighlights from '../components/CategoryHighlights'
import FeaturedProductGrid from '../components/FeaturedProductGrid'
import PromotionalBanner from '../components/PromotionalBanner'
import TestimonialsSlider from '../components/TestimonialsSlider'
import BlogPreview from '../components/BlogPreview'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryHighlights />
      <FeaturedProductGrid />
      <PromotionalBanner />
      <TestimonialsSlider />
      <BlogPreview />
    </>
  )
}
