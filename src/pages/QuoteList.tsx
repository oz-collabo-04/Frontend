import React, { useMemo, ReactNode } from 'react'
import styles from './styles/QuoteList.module.scss'
import MainBtn from '../components/Button/MainBtn'
import Tab from '../components/Tab/Tab'

const Header = () => (
  <header className={styles.header}>
      <h1>So New Wedding</h1>
      <a href="#">견적 요청</a>
      <a href="#">받은 견적</a>
      <a href="#">채팅</a>
      <div className={styles.userIcon}>👤</div>
  </header>
)

interface QuoteCardProps {
  category: string;
  name: string;
  price: number;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ category, name, price }) => (
  <div className={styles.quoteCard}>
    <div className={styles.cardHeader}>
      <span className={styles.category}>{category}</span>
      <div className={styles.profileImage}></div>
    </div>
    <h3 className={styles.name}>{name}</h3>
    <p className={styles.price}>{price.toLocaleString()}원</p>
    <div className={styles.cardActions}>
      <MainBtn
        name="전문가 프로필"
        size="small"
        backgroundColor="#FFE14C"
        color="#000000"
      />
      <MainBtn
        name="채팅하기"
        size="small"
        backgroundColor="#FFFFFF"
        borderColor="#000000"
        color="#000000"
      />
    </div>
  </div>
)

interface Quote {
  id: number;
  category: string;
  name: string;
  price: number;
}

const QuoteList: React.FC = () => {
  const categories = ['전체', '결혼식 사회자', '축가 가수', '영상촬영', '스냅 촬영']

  const quotes: Quote[] = useMemo(() => [
    { id: 1, category: '결혼식 사회자', name: '김사회', price: 300000 },
    { id: 2, category: '축가 가수', name: '이가수', price: 500000 },
    { id: 3, category: '영상촬영', name: '박촬영', price: 800000 },
    { id: 4, category: '스냅 촬영', name: '최스냅', price: 600000 },
    { id: 5, category: '결혼식 사회자', name: '정사회', price: 350000 },
    { id: 6, category: '축가 가수', name: '강가수', price: 550000 },
  ], []);

  const renderQuoteCards = (category: string) => {
    const filteredQuotes = category === '전체'
      ? quotes
      : quotes.filter(quote => quote.category === category);

    return (
      <div className={styles.quoteGrid}>
        {filteredQuotes.map(quote => (
          <QuoteCard key={quote.id} {...quote} />
        ))}
      </div>
    )
  }

  const tabContent: { label: string; content: ReactNode }[] = categories.map(category => ({
    label: category,
    content: renderQuoteCards(category),
  }))

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>받은 견적 리스트</h2>
        <Tab tabs={tabContent} />
      </main>
    </div>
  )
}

export default QuoteList