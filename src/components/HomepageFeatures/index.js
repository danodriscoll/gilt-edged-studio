import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Model Development',
    Svg: require('@site/static/img/model_development.svg').default,
    description: (
      <>
        An open-ended agent-based monetary model development.<br/>A <Link to="/docs/introduction">model</Link> introduction.
      </>
    ),
  },
  {
    title: 'Data Analysis',
    Svg: require('@site/static/img/model_analysis.svg').default,
    description: (
      <>
        Analysis of both model and real-world economic time-series.<br/>See the <Link to="/blog">blog</Link>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
