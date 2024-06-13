import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Model Agent Properties',
    Svg: require('@site/static/img/model_development.svg').default,
    description: (
      <>
        An <Link to="/docs/introduction">introduction</Link> to early models, tests and ABMLP-X agents.
      </>
    ),
  },
  {
    title: 'Bank Agent Logic',
    Svg: require('@site/static/img/cb-agent.svg').default,
    description: (
      <>
        Central Bank responses to Government and Household behaviours: A strategy explored.
      </>
    ),
  },
  {
    title: 'Development and Analysis',
    Svg: require('@site/static/img/model_analysis.svg').default,
    description: (
      <>
        The open-ended development of ABMLP-X and time-series analysis. Peruse the <Link to="/blog">blog</Link>.
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
