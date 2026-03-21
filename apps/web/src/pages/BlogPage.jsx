import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function BlogPage() {
  const blogPosts = [
    {
      id: '5-tren-erp-indonesia-2026',
      title: '5 Tren ERP Indonesia yang Mendominasi di 2026',
      excerpt: 'Pelajari tren ERP terkini: modern frontend dengan foundation teruji, progressive enhancement, dan integration strategy yang realistis untuk bisnis Indonesia.',
      author: 'Tim Batasku',
      date: '15 Maret 2026',
      readTime: '5 menit',
      category: 'Tren Teknologi',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 'cara-memilih-erp-ukm',
      title: 'Cara Memilih ERP yang Tepat untuk UKM Indonesia',
      excerpt: 'Panduan lengkap memilih sistem ERP untuk bisnis kecil-menengah. Faktor yang harus dipertimbangkan, budget, dan implementasi yang sukses.',
      author: 'Tim Batasku',
      date: '10 Maret 2024',
      readTime: '7 menit',
      category: 'Panduan',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: 'studi-kas-efisiensi-erp',
      title: 'Studi Kasu: Efisiensi 40% dengan Implementasi ERP Cloud',
      excerpt: 'Kisah sukses perusahaan distribusi yang meningkatkan efisiensi operasional 40% setelah mengadopsi sistem ERP cloud-based.',
      author: 'Tim Batasku',
      date: '5 Maret 2024',
      readTime: '6 menit',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
    },
    {
      id: 'erp-vs-akuntansi-software',
      title: 'ERP vs Software Akuntansi: Mana yang Lebih Baik untuk Bisnis Anda?',
      excerpt: 'Perbandingan lengkap antara sistem ERP dan software akuntansi standalone. Kelebihan, kekurangan, dan kapan harus beralih ke ERP.',
      author: 'Tim Batasku',
      date: '28 Februari 2024',
      readTime: '8 menit',
      category: 'Komparasi',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 'roi-implementasi-erp',
      title: 'Menghitung ROI Implementasi ERP: Panduan Praktis',
      excerpt: 'Cara menghitung return on investment dari implementasi ERP. Metrics yang harus di-track dan timeline untuk break-even point.',
      author: 'Tim Batasku',
      date: '20 Februari 2024',
      readTime: '6 menit',
      category: 'Financial',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44'
    },
    {
      id: 'cloud-erp-benefits',
      title: '7 Alasan Mengapa Cloud ERP adalah Masa Depan Bisnis Indonesia',
      excerpt: 'Keuntungan cloud ERP dibandingkan on-premise: cost efficiency, scalability, security, dan accessibility untuk bisnis modern.',
      author: 'Tim Batasku',
      date: '15 Februari 2024',
      readTime: '5 menit',
      category: 'Cloud Technology',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
    }
  ];

  const categories = [
    { name: 'Semua', count: 6 },
    { name: 'Tren Teknologi', count: 1 },
    { name: 'Panduan', count: 1 },
    { name: 'Case Study', count: 1 },
    { name: 'Komparasi', count: 1 },
    { name: 'Financial', count: 1 },
    { name: 'Cloud Technology', count: 1 }
  ];

  return (
    <>
      <Helmet>
        <title>Blog ERP Indonesia - Tips & Panduan Bisnis Modern</title>
        <meta name="description" content="Blog ERP Indonesia dengan tips, panduan, dan studi kasus implementasi sistem ERP untuk bisnis modern. Pelajari tren teknologi dan best practices." />
        <meta name="keywords" content="blog ERP Indonesia, panduan ERP, tips bisnis, implementasi ERP, studi kasus ERP" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog ERP Indonesia - Tips & Panduan Bisnis Modern" />
        <meta property="og:description" content="Blog ERP Indonesia dengan tips, panduan, dan studi kasus implementasi sistem ERP untuk bisnis modern" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batasku.cloud/blog" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://batasku.cloud/blog" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="mb-6">Blog ERP Indonesia</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Tips, panduan, dan studi kasus implementasi sistem ERP untuk bisnis modern di Indonesia
                </p>
              </motion.div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                          <div className="aspect-video bg-muted">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                                {post.category}
                              </span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground line-clamp-3 mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button asChild variant="outline" className="w-full">
                              <Link to={`/blog/${post.id}`}>
                                Baca Selengkapnya
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Categories */}
                    <Card>
                      <CardHeader>
                        <h3 className="font-semibold">Kategori</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div key={category.name} className="flex items-center justify-between py-1">
                              <span className="text-sm hover:text-primary cursor-pointer transition-colors">
                                {category.name}
                              </span>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                {category.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Newsletter */}
                    <Card className="bg-primary/5 border-primary/20">
                      <CardHeader>
                        <h3 className="font-semibold">Newsletter ERP Indonesia</h3>
                        <p className="text-sm text-muted-foreground">
                          Dapatkan tips dan panduan ERP terbaru langsung di inbox Anda
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to="/demo-kontak">
                            Subscribe Gratis
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card>
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold mb-2">Butuh Konsultasi ERP?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Diskusikan kebutuhan bisnis Anda dengan tim kami
                        </p>
                        <Button asChild size="sm">
                          <Link to="/demo-kontak">
                            Gratis Konsultasi
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
