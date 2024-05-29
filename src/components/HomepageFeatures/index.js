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
        An open-ended agent-based monetary model development. Read the <Link to="/docs/introduction">introduction</Link>.
      </>
    ),
  },
  {
    title: 'Evolution of Strategies',
    Svg: require('@site/static/img/creative_decision.svg').default,
    description: (
      <>
        Household strategies and monetary policy logic defined.
      </>
    ),
  },
  {
    title: 'Data Analysis',
    Svg: require('@site/static/img/model_analysis.svg').default,
    description: (
      <>
        Journey to the future. Agent behaviours and macro output time-series analysis. Peruse the <Link to="/blog">blog</Link>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
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
