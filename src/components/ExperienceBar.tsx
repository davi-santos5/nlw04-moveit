import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentageToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span> 0 XP</span>
      <div>
        <div style={{ width: `${percentageToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentageToNextLevel}%` }}
        >
          {currentExperience} XP
        </span>
      </div>
      <span> {experienceToNextLevel} XP</span>
    </header>
  );
}
